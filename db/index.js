const connection = require('./connection');

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

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAll() {
        return this.connection.query(
            `SELECT 
                id, name, address, 
                city, state, zip, 
                website, phone_number 
            FROM 
                organization`
        )
    }
    
    selectAllFood() {
        return this.connection.query(
            `SELECT id, name, address, city, state, zip, website, phone_number 
            FROM organizations
            WHERE food_bank = 1 or served_meal = 1`
        )
    }
    
    selectAllShelter() {
        return this.connection.query(
            `SELECT id, name, address, city, state, zip, website, phone_number 
            FROM organizations 
            WHERE immediate_shelter = 1 or longterm_shelter = 1`
        )
    }

    selectAllHealth() {
        return this.connection.query(
            `SELECT id, name, address, city, state, zip, website, phone_number 
            FROM organizations 
            WHERE urgent_care = 1 or dental = 1 or mental = 1`
        )
    }

    selectAllDaily() {
        return this.connection.query(
            `SELECT id, name, address, city, state, zip, website, phone_number 
            FROM organizations 
            WHERE daily = 1`
        )
    }
    
    createOrg(col, val) {
        return this.connection.query(
            `INSERT INTO organizations ? 
            VALUES ?`, col.toString(), printQuestionMarks(val.length)
        )
    }

    createUser(col, val) {
        return this.connection.query(
            `INSERT INTO users ?
            VALUES ?`, col.toString(), printQuestionMarks(val.length)
        )
    }
};

module.exports = new DB(connection);