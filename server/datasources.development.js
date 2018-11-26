module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  mysqlDs: {
    host: process.env.DATABASE_URL || '127.0.0.1',
    port: 3306,
    url: "",
    database: "beevaffinity",
    password: "123456",
    name: "mysqlDs",
    user: "shokmaster",
    connector: "mysql",
    debug: false
  }
};
