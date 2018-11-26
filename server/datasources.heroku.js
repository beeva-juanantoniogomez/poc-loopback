module.exports = {
  db: {
    name: 'db',
    connector: 'memory'
  },
  mysqlDs: {
    url: process.env.DATABASE_URL,
    name: 'mysqlDs',
    debug: 'true',
    connector: 'postgresql'
  }
};
