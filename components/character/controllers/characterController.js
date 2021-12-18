
const characterService = require("../services/characterService");
class Character {

    async getCharacterAxios(req, res, next){
        try {
            let { id } = req.body;
            let response = await characterService.getCharacterAxios(id);
            res.json(response);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    async getCharacterbd(req, res, next){
        try {
            let { id } = req.body;
            let response = await characterService.getCharacterbd(id);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async insertCharacterApiToBD(req, res, next){
        try {
            let response = await characterService.insertCharacterApiToBD();
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async createCharacter(req, res, next){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    async updateCharacter(req, res, next){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCharacter(req, res, next){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = new Character();