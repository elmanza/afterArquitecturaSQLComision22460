const axios = require("axios");
const db_knex = require("../../../config/db");
const { config } = require("../../../config");

class Character {

    async getCharacterAxios(id = null){
        try {
            let url = id ? `${config.apiRickAndMorty.characters}/${id}` : config.apiRickAndMorty.characters;
            let res = await axios(`${url}`);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    async getCharacterbd(id = null){
        try {
            if(id){
                return await db_knex.from("character").where({id});
            }else{
                return await db_knex.from("character");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async insertCharacterApiToBD(){
        try {
            let all_character = await this.getCharacterAxios();
            let data = {};
            let insert_data = await Promise.all(all_character.results.map(async character =>{
                let origin = character.origin.name == "unknown" ? null : await axios(`${character.origin.url}`);
                let location = character.location.name == "unknown" ? null : await axios(`${character.location.url}`);

                // Promise.All
                return {
                    id:character.id, 
                    name:character.name,
                    status:character.status,
                    species:character.species,
                    type:character.type,
                    gender:character.gender,
                    image:character.image,
                    origin: origin == 0 ? origin : origin.data.id,
                    location: location == 0 ? location : location.data.id,
                    created:character.created
                }
            }));
            return await db_knex.from("character").insert(insert_data);
        } catch (error) {
            console.log(error);
        }
    }

    async createCharacter(){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    async updateCharacter(){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCharacter(){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = new Character();