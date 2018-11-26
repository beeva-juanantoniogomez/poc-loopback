module.exports = {
  db: {
    name: 'db',
    connector: 'memory'
  },
  mysqlDs: {
    url: process.env.DATABASE_URL,
    database: 'beevaffinity',
    password: process.env.DB_PASSWORD,
    name: 'mysqlDs',
    user: process.env.DB_USER,
    connector: 'mysql'
  }
};
