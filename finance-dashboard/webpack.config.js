const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  output: {
    uniqueName: "financeDashboard",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "financeDashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./FinanceDashboard": "./src/main.ts", // ✅ FIX: Point to `main.ts`
      },      
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: "auto" },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: "auto" },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: "auto" },
      },
    }),
  ],
};
