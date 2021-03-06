module.exports = {
    resource: '/price(/:id)',

    init: function (ctx, http) {
        var data = http.data;
        this.id = data.id;
        this.inputData = typeof data == 'string' ? JSON.parse(data) : data;
        this.model = ctx.db.model('PriceSchema');
    },

    GET: function (ctx, http) {
        var service = this;
        service.init(ctx, http);
        service.model.find({}, function (error, result) {});

        if (service.id) {
            service.model.findOne({ _bookId: service.id }, function (error, result) {
                if (error) {
                    throw { status: 500, message : new Error('DB error: ' + error).stack};
                }

                http.reply(JSON.stringify(result));
            });
        } else {
            service.model.find({}, function (error, result) {
                if (error) {
                    throw { status: 500, message : new Error('DB error: ' + error).stack};
                }

                http.reply(result);
            });
        }
    },

    PUT: function (ctx, http){
        var service = this;
        service.init(ctx, http);

        var id = service.inputData._id;
        if (id) {
            service.model.findOne({
                _id: id
            }, function (err, result) {
                var updated = ctx.util.json.mapData(service.inputData, result);
                updated.save(function (error) {
                    if (error) {
                        throw { status: 500, message : new Error('DB error: ' + error).stack};
                    }

                    http.reply({});
                });
            });
        } else {
            throw { status: 400, message : new Error('No id specified').stack};
        }
    }
};
