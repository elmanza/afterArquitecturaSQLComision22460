const express = require("express");
const app = express();
const cors = require("cors");
const { config } = require("./config");
const PORT = config.port;
const db_knex = require("./config/db");

const serverRoutes = require("./routes");


// Middlewares
app.use(cors(config.cors));

// Settings 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


serverRoutes(app);

(async ()=>{
    try {
        // create 
        let hastable = await db_knex.schema.hasTable('character');
        if(!hastable){
            await db_knex.schema.createTable("character", table =>{
                table.increments("id").primary(),
                table.string("name"),
                table.string("status"),
                table.string("species"),
                table.string("type"),
                table.string("gender"),
                table.string("image"),
                table.integer("origin"),
                table.integer("location"),
                table.string("created")
            });
        }else{
            console.log("Nada en la cabeza!! porq no se me ocurre nada")
        }
        
    } catch (error) {
        console.log(error);
    }
})();


(async ()=>{
    try {        
        // create data dentro de articulos
        let data = [
            {
                nombre: "Televisot",
                codigo: "cd123",
                precio:"12.5",
                stock: 10
            },
            {
                nombre: "Monitor",
                codigo: "md14",
                precio:"10",
                stock: 5
            },
            {
                nombre: "Notebook",
                codigo: "cd155",
                precio:"300",
                stock: 5
            },
            {
                nombre: "Iphone",
                codigo: "u53l355",
                precio:"900",
                stock: 23
            },
            {
                nombre: "Monitor LG",
                codigo: "cd87123",
                precio:"842.5",
                stock: 50
            },
            {
                nombre: "fernet",
                codigo: "fer111",
                precio:"500",
                stock: 13
            }
              
        ];
        let response = await db.from("articulos").insert(data);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});


(async ()=>{
    try {        
        // create data dentro de articulos
        let response = await db.from("articulos");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});

(async ()=>{
    try {        
        // create data dentro de articulos
        let response = await db.from("articulos").where("id", "=", 3).del();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});

(async ()=>{
    try {        
        // create data dentro de articulos
        let response = await db.from("articulos").where("id", "=", 2).update({stock:0});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, ()=>{
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
})