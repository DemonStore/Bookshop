module.exports = {
    name: 'bookRemoved',
    invoke: function (ctx, id) {
        var stockModel = ctx.db.model('StockSchema');
        var priceModel = ctx.db.model('PriceSchema');

        stockModel.remove({ _bookId: id }, function (error) {
            if (error) {
                ctx.log.error(error);
            }
        });
        priceModel.remove({ _bookId: id }, function (error) {
            if (error) {
                ctx.log.error(error);
            }
        });
    }
};
