var config = require('./config/app');
var slimple = require('slimple');

var app = {
    context: {
        // test: function(text){
        //     this.log.trace("app.context.test: " + text);
        // }
    },
    run: function(){
        slimple.run(config, this.context);
    }
};

app.run();
