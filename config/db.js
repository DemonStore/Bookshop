/**
 * configuration for mongoDB
 */
module.exports = {
    active: true,
    connectionString : 'mongodb://localhost/bookshop',
    connectionProperties:  {
        server: {
            poolSize: 10
        }
    }
};
