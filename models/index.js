const orm = require('../config/orm.js');

module.exports = {
    selectAllFood: function(cb) {
        orm.selectAllFood('organization', function (res) {
            cb(res)
        })
    },
    selectAllShelter: function(cb) {
        orm.selectAllShelter('organization', function (res) {
            cb(res)                    
        })
    },
    selectAllHealth: function(cb) {
        orm.selectAllHealth('organization', function (res) {
            cb(res)
        })
    },
    selectAllDaily: function(cb) {
        orm.selectAllDaily('organization', function (res) {
            cb(res)
        })
    },
    create: function(col, val, cb) {
        orm.create('organization', col, val, function(res) {
            cb(res);
        });
    }
};

