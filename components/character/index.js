const express = require("express");
const characterController = require("./controllers/characterController");
module.exports = app => {
    const router = express.Router();
    app.use("/character", router);
    router.get("/", characterController.getCharacterbd);
    router.get("/getcharacteraxios", characterController.getCharacterAxios);
    router.get("/asynccharacter", characterController.insertCharacterApiToBD);
    router.put("/", characterController.updateCharacter);
    router.post("/", characterController.createCharacter);
    router.delete("/", characterController.deleteCharacter);
}