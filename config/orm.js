const connection = require('./connection')

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// function objToSql(ob) {
//     const arr = []

//     for (let key in ob) {
//         let value = ob[key];

//         if (Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === 'string' && value.indexOf(' ') >= 0) {
//                 value = "'" + value + "'";
//             }
//             arr.push(key + '=' + value);
//         }
//     }
//     return arr.toString();
// }

const orm = {
    selectAll: function(cb) {
        let queryString= "SELECT * FROM organizations ORDER BY name;"
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    selectAllFood: function(cb) {
        let queryString = "SELECT * FROM organizations WHERE food_bank = 1 or served_meal = 1;"
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    selectAllShelter: function(cb) {
        let queryString = "SELECT * FROM organizations WHERE immediate_shelter = 1 or longterm_shelter = 1;"
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    selectAllHealth: function(cb) {
        let queryString = "SELECT * FROM organizations WHERE urgent_care = 1 or dental = 1 or mental = 1;"
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    selectAllDaily: function(cb) {
        let queryString = "SELECT * FROM organizations WHERE daily = 1;"
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    
    createOrg: function ( col, val, cb) {
        let queryString = 'INSERT INTO organizations';
        
        queryString += ' (' + col.toString() + ') ';
        queryString += 'VALUES (' + printQuestionMarks(val.length) + ')';
        console.log(queryString);
        connection.query(queryString, val, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;