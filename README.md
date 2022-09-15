# Module Federation Support for Node Environments

Software streaming to enable node.js support for browser-like chunk loading

```js

const {NodeFederationPlugin, StreamingTargetPlugin} = require("@module-federation/node");

const config = {
  target: isServer ? false : "web",
  plugins: [
    new NodeFederationPlugin({
      name: 'website2',
      library: {type: 'commonjs-module'},
      remotes: {},
      filename: 'remoteEntry.js',
      exposes: {
        './SharedComponent': './remoteServer/SharedComponent',
      },
    }),
    new StreamingTargetPlugin({
      name: 'website2',
      library: {type: 'commonjs-module'},
      remotes: {},
    }),
  ]
}
```
