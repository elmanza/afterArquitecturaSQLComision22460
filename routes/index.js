const apiCharacter = require("../components/character");
module.exports = app =>{
    apiCharacter(app);

    app.get("/", (req, res, next)=>{
        res.send("ok");
    });
}