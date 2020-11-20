const orm = require('./orm');

const hand = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    createOrg: function(col, val, cb) {
        orm.createOrg(col, val, function(res) {
            cb(res);
        });
    },
    createUser: function(col, val, cb) {
        orm.createUser(col, val, function(res) {
            cb(res);
        });
    }
  };

module.exports = hand;