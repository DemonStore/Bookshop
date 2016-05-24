var Schema = require('mongoose').Schema;

module.exports = {
    name: 'StockSchema',
    schema: {
        _bookId: Schema.Types.ObjectId,
        number: { type: Number, default: 0 }
    }
};
