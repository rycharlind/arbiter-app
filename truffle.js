module.exports = {
  build: {
    "images/": "images/",
    "index.html": "index.html",
    "app.css":"app.scss",
    "app.js":"app.js",
    "app.routes.js":"app.routes.js",
    "register.html":"register/register.html",
    "register.js":"register/register.js",
    "sign-in.html":"sign-in/sign-in.html",
    "sign-in.js":"sign-in/sign-in.js",
    "accounts.html":"accounts/accounts.html",
    "accounts.js":"accounts/accounts.js",
    "send.html":"send/send.html",
    "send.js":"send/send.js",
    "contract.html":"contract/contract.html",
    "events.html":"events/events.html",
    "web3.service.js":"web3.service.js",
    "ethereumjs-accounts.js":"ethereumjs-accounts.js",
    "hooked-web3-provider.min.js":"hooked-web3-provider.min.js",
    "ngMask.js":"ngMask.js",
  },
  deploy: [
    "MetaCoin",
    "ConvertLib"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
