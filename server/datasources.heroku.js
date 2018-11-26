module.exports = {
  db: {
    name: 'db',
    connector: 'memory'
  },
  postgreDs: {
    url: process.env.DATABASE_URL,
    name: 'postgreDs',
    debug: 'true',
    connector: 'postgresql'
  }
};
