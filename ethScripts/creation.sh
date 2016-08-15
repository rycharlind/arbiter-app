#Create accounts until there are four to work with
while [ `geth --datadir data account list | grep -c "#3"` -lt 1 ]
do
	geth --datadir data account new
done

#Put the geth accounts into the genesis file
cp orig-gen.json genesis.json
accountPos=1
for accountNum in $( geth --datadir data account list | grep -o "{.*}" | tr -d "{}" )
do
	sed "s/GARY$accountPos/$accountNum/g" genesis.json > newGen.json
	mv newGen.json genesis.json
	accountPos=`expr $accountPos + 1`
done

#Create the data directory from the genesis
geth --datadir data init genesis.json

#Run the geth server
geth --identity "ArbiterNode" --rpc --rpcport "8545" --rpccorsdomain "*" --datadir "data" --port "30304" --nodiscover --ipcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" --rpcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" --autodag --networkid 1900 --nat "any" --unlock 0 --verbosity 6 console
#could add --mine to mine from here or use another node to do so

#Connect to geth server to mine
geth --verbosity 6 attach http://localhost:8545
#Then user miner.start(4)


#personal.unlockAccount(eth.accounts[0])
#eth.sendTransaction({from:eth.accounts[0], to:eth.accounts[1], value:100000000000})
