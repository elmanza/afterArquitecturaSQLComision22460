let {db} =require("./index");
let knex = require('knex');

let mysql = knex({
    client: 'mysql',
    connection: {
        ...db
    },
    pool: { min: 0, max: 7 }
  });

  let slite3 = knex({
    client: 'sqlite3',
    connection: {
        filename: './config/mydb.sqlite'
    }
});



  class Database{
    static client;
    constructor(){
        if(Database.client){
            return Database.client;
        }
        Database.client = slite3;
        this.client = Database.client;
    }
  }
  module.exports = new Database().client;