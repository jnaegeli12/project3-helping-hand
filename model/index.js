const orm =  require('../db/index');

const hand = {
    create: function(col, val, cb) {
        orm.create('organizations', col, val, function (res) {
            cb(res)
        })
    }
};
module.exports = hand