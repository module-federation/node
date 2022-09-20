const NodeFederationPlugin = require("./NodeFederationPlugin");
const StreamingTargetPlugin = require("./StreamingTargetPlugin");

class UniversalFederationPlugin {

  constructor({experiments, ...options}, context) {
    this.options = options || {};
    this.context = context || {};
    this.experiments = experiments || {};
  }

  apply(compiler) {
    const isServer = this.options.isServer || compiler.options.name === 'server';
    const {webpack} = compiler;

    if(isServer) {
      new NodeFederationPlugin({experiments: this.experiments, ...this.options}).apply(compiler);
      new StreamingTargetPlugin(this.options).apply(compiler);
    } else {
      new (this.context.ModuleFederationPlugin || (webpack && webpack.container.ModuleFederationPlugin) ||
        require('webpack/lib/container/ModuleFederationPlugin'))(
        this.options
      ).apply(compiler);
    }
  }
}

module.exports = UniversalFederationPlugin;
