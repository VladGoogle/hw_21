module.exports = {
    'development': {
        'username': process.env.POSTGRES_USER,
        'password': process.env.POSTGRES_PASSWORD,
        'database': process.env.POSTGRES_DB,
        'host': process.env.PGHOST,
        'port': process.env.PGPORT,
        'dialect': 'postgres'
    },
    'stage': {
        'username': process.env.POSTGRES_USER,
        'password': process.env.POSTGRES_PASSWORD,
        'database': process.env.POSTGRES_DB,
        'host': process.env.DB_HOST,
        'dialect': 'postgres'
    },
    'production': {
        'username': process.env.POSTGRES_USER,
        'password': process.env.POSTGRES_PASSWORD,
        'database': process.env.POSTGRES_DB,
        'host': process.env.DB_HOST,
        'dialect': 'postgres'
    }
};
