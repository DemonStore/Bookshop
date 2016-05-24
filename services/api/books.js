module.exports = {
    resource: '/books(/:id)',

    init: function (ctx, http) {
        var data = http.data;
        this.id = data.id;
        this.inputData = typeof data == 'string' ? JSON.parse(data) : data;
        this.model = ctx.db.model('BookSchema');
    },

    GET: function (ctx, http) {
        var service = this;
        service.init(ctx, http);
        service.model.find({}, function (error, result) {});

        if (service.id) {
            service.model.findById(service.id, function (error, result) {
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

    POST: function (ctx, http){
        var service = this;
        service.init(ctx, http);

        var preparedData = ctx.util.json.mapData(service.inputData, {});
        var dbObject = new service.model(preparedData);

        dbObject.save(function (error) {
            if (error) {
                throw { status: 500, message : new Error('DB error: ' + error).stack};
            }

            ctx.event.emit('bookAdded', dbObject._id);
            http.reply({ id : dbObject._id });
        });
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
    },

    DELETE: function (ctx, http) {
        var service = this;
        service.init(ctx, http);

        if (service.id) {
            service.model.remove({
                _id: service.id
            }, function (error) {
                if (error) {
                    throw { status: 500, message : new Error('DB error: ' + error).stack};
                }

                ctx.event.emit('bookRemoved', service.id);
                http.reply({});
            });
        } else {
            throw { status: 400, message : new Error('No id specified').stack};
        }
    }
};
