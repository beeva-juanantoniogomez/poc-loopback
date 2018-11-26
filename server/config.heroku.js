module.export = {
  restApiRoot: "/api",
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  remoting: {
    context: false,
    rest: {
      handleErrors: false,
      normalizeHttpPath: false,
      xml: false
    },
    json: {
      strict: false,
      limit: "100kb"
    },
    urlencoded: {
      extended: true,
      limit: "100kb"
    },
    cors: false
  }
};
