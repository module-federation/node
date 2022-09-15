# Module Federation Support for Node Environments

This package exposes two Webpack Plugins to bring the concept and power of Module Federation to NodeJS. This will allow your server to fetch chunks across the network allowing for distributed deployments of federated applications.

## Installation

To install the plugin run one of the following commands in your terminal for your application.

```bash
# npm
npm install @module-federation/node

# yarn
yarn add @module-federation/node
```

## Usage

To then use the plugin, modify your `webpack.config.js` to include and use the two plugins.

At build time, you need to be aware if you're building for the `server` or for the `browser`.
If it's building for server, we need to set `target: false` to allow the plugins to function correctly.

The `NodeFederationPlugin` follows the same API as the [Module Federation Plugin](https://webpack.js.org/plugins/module-federation-plugin) and therefore should be a drop-in replacement if you already have it set up in your `webpack.config.js`.

An example configuration is presented below:
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
