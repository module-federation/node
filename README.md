![banner image](./assets/banner.png)
<div align="center">
	<!--  for version -->
  <img src="https://img.shields.io/npm/v/<package-name>" alt="version" >
	<img src="https://img.shields.io/apm/l/atomic-design-ui.svg?" alt="license" >
  <!-- for downloads -->
  <img src="https://img.shields.io/npm/dt/?<package-name>?color=%2317BCB8" alt="downloads">
 </div>
<!-- when you published it on npm simply replace <package-name> with the name of package  -->

<p align="center">
<strong>A package to bring the concept and power of module federation to NodeJS.</strong>
</p>

## ⚡ Features
- Exposes two Webpack Plugins to enable Module Federation.
- Allows server to fetch chunks across the network.
- Allow distributed deployments of federated applications.

## 📦 Installation

To install the plugin run one of the following commands in your terminal for your application.

```bash
# npm
npm install @module-federation/node

# yarn
yarn add @module-federation/node
```

## 🚀 Usage

To then use the plugin, modify your `webpack.config.js` to include and use the two plugins.

At build time, you need to be aware if you're building for the `server` or for the `browser`.
If it's building for server, we need to set `target: false` to allow the plugins to function correctly.

The `NodeFederationPlugin` follows the same API as the [Module Federation Plugin](https://webpack.js.org/plugins/module-federation-plugin) and therefore should be a drop-in replacement if you already have it set up in your `webpack.config.js`.

### 🔧 Config Example
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
## 🔑 License
- MIT @[ScriptedAlchemy](https://github.com/ScriptedAlchemy)

## 👨‍💻 Contributors
List of our amazing contributors 💥

<a href="https://github.com/module-federation/node/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=module-federation/node" />
</a>