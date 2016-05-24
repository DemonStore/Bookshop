module.exports = {
    port: process.env.VCAP_APP_PORT || process.env.PORT || 8080,
    servicePath: '/services',
    eventPath: '/events',
    contentPath: '/content',
    schemaPath: '/schemas',
    db: require('./db'),
    log: require('./log')
};
