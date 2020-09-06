module.exports = {
    development: {
        client: process.env.DB_CONNECTION || 'mysql',
        connection: {
            host : process.env.DB_HOST || '127.0.0.1',
            user : process.env.DB_USERNAME || 'root',
            password : process.env.DB_PASSWORD || '',
            database : process.env.DB_DATABASE || 'shdb',
            charset  : 'utf8'
        },
        migrations: {
            directory: __dirname + '/src/database/migrations'
        },
        seeds: {
            directory: __dirname + '/src/database/seeds'
        }
    },
    production: {
        client: process.env.DB_CONNECTION || 'mysql',
        connection: {
            host : process.env.DB_HOST || '127.0.0.1',
            user : process.env.DB_USERNAME || 'root',
            password : process.env.DB_PASSWORD || '',
            database : process.env.DB_DATABASE || 'shdb',
            charset  : 'utf8'
        },
        migrations: {
            directory: __dirname + '/src/database/migrations'
        },
        seeds: {
            directory: __dirname + '/src/database/seeds'
        }
    }
}