const NodeFederationPlugin = require("./NodeFederationPlugin");
const StreamingTargetPlugin = require("./StreamingTargetPlugin");

class UniversalFederationPlugin {

  constructor({experiments, ...options}, context) {
    this.options = options || {};
    this.context = context || {};
    this.experiments = experiments || {};
  }

  apply(compiler) {
    const {isServer, ...options} = this.options;
    const {webpack} = compiler;

    if(isServer || compiler.options.name === 'server') {
      new NodeFederationPlugin({experiments: this.experiments, ...options}).apply(compiler);
      new StreamingTargetPlugin(options).apply(compiler);
    } else {
      new (this.context.ModuleFederationPlugin || (webpack && webpack.container.ModuleFederationPlugin) ||
        require('webpack/lib/container/ModuleFederationPlugin'))(
        options
      ).apply(compiler);
    }
  }
}

module.exports = UniversalFederationPlugin;
