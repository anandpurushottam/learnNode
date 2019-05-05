const env = {
    // db: {
    //     database: process.env.DB_NAME || 'postgres',
    //     username: process.env.DB_USER || 'postgres',
    //     password: process.env.DB_PASSWORD || 'anand1993',
    //     host: process.env.URL || '127.0.0.1',
    //     dialect: process.env.DB_DIALECT || 'postgres'
    // }
    db: {
        database: process.env.DB_NAME || 'd61rdcu3ujih6u',
        username:process.env.DB_USER ||  'lpcpaqhxslcmpo',
        password: process.env.DB_PASSWORD || 'dd5e11ba7ddfe19950422215f8c1ff0e5eac3beef2d702deae9e9d3eef25b1cf',
        host:process.env.URL ||  'ec2-54-83-205-27.compute-1.amazonaws.com',
        dialect: process.env.DB_DIALECT || 'postgres'
    }
};

module.exports=env;