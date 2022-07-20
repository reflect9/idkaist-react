const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, "src/assets/"),
      '@data': path.resolve(__dirname, "src/data/"),
      '@components': path.resolve(__dirname, "src/components/"),
      '@views': path.resolve(__dirname, "src/assets/views/"),
      '@utils': path.resolve(__dirname, "src/utils/")
    }
  }
}