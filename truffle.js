module.exports = {
  build: {
    "images/": "images/",
    "index.html": "index.html",
    "app.css":"app.scss",
    "temp-custom-styles.css":"temp-custom-styles.css",
    "app.js":"app.js",
    "app.routes.js":"app.routes.js",
    "register.html":"register/register.html",
    "register.js":"register/register.js",
    "sign-in.html":"sign-in/sign-in.html",
    "sign-in.js":"sign-in/sign-in.js",
    "home.html":"home/home.html",
    "home.js":"home/home.js",
    "accounts.html":"accounts/accounts.html",
    "accounts.js":"accounts/accounts.js",
    "account.html":"account/account.html",
    "account.js":"account/account.js",
    "send.html":"send/send.html",
    "send.js":"send/send.js",
    "contract.html":"contract/contract.html",
    "contract.js":"contract/contract.js",
    "contracts.html":"contracts/contracts.html",
    "contracts.js":"contracts/contracts.js",
    "events.html":"events/events.html",
    "arbiter.service.js":"arbiter.service.js",
    "ethereumjs-accounts.js":"ethereumjs-accounts.js",
    "hooked-web3-provider.min.js":"hooked-web3-provider.min.js",
    "ngMask.js":"ngMask.js",
  },
  deploy: [
    "MetaCoin",
    "MyToken"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
