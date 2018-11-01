# TronPay Browser Extension
[Download From Chrome WebStore](https://chrome.google.com/webstore/detail/tronpay/gjdneabihbmcpobmfhcnljaojmgoihfk)

TronPay is a Browser Extension for Tron NetWork.  
It can be used to debug smart contract, or play DApps with browser.

## Build

 - Install [Node.js](https://nodejs.org/) version 8.9.3 or later.
 - Install local dependencies with `npm install`.
 - Build with development `npm run dev`.
 - Build for Publishing `npm run build`.

 Uncompressed builds will found in `./build`

## DApp Developers

When TronPay is installed, TronPay will inject a [TronWeb](https://github.com/tronprotocol/tron-web) object into current document, you can find it in `window.tronPay.tronWeb` or `window.tronWeb`.  
Note that you can use like this to check TronPay environment
```
window.addEventListener('load', function() {

  // Checking if the tronWeb has been injected
  if (typeof tronPay !== 'undefined') {
    tronWeb = tronPay.tronWeb || tronWeb
    if (tronWeb.isTronPay && tronWeb.ready) {
        // Now start you app & access tronWeb
    }
  } else {
    console.log('No tronWeb? You should install TronPay!')
  }
})
```

More `TronWeb` document can found in [Tron NetWork Official](https://github.com/tronprotocol).

## Join TronPay community

* Telegram: https://t.me/joinchat/FYpRMRHjRvBoEfjjgPwWhg
* Twitter: https://twitter.com/TronPayOfficia1

## License
TronPay is [MIT](https://mit-license.org/) licensed