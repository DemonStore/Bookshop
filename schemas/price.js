var Schema = require('mongoose').Schema;

module.exports = {
    name: 'PriceSchema',
    schema: {
        _bookId: Schema.Types.ObjectId,
        price: { type: Number, default: 0 }
    }
};
