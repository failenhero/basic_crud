const config = {
    database: {
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.DATABASE_PORT,
        host: process.env.DATABASE_HOST
    }
}

module.exports = config;