module.exports = {
    name: 'bookAdded',
    invoke: function (ctx, id) {
        var stockModel = ctx.db.model('StockSchema');
        var priceModel = ctx.db.model('PriceSchema');

        var stockDBObject = stockModel({_bookId: id});
        var priceDBObject = priceModel({_bookId: id});

        stockDBObject.save(function (error) {
            if (error) {
                ctx.log.error(error);
            }
        });
        priceDBObject.save(function (error) {
            if (error) {
                ctx.log.error(error);
            }
        });
    }
};
