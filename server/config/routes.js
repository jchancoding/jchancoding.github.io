const pets = require('../controllers/pets.js');
path = require('path');

module.exports = function(app) {

    //get all pets
    app.get("/pets", function(req, res){
        pets.getPets(req, res);
    })

    //get one pet
    app.get("/pet/get/:_id", function(req, res){
        pets.getOnePet(req, res);
    })

    //add a pet
    app.post("/pet/add", function(req, res){
        console.log("inside add route")
        pets.addPet(req, res);
    })

    //update one pet
    app.put("/pet/update/:_id", function(req, res){
        pets.updatePet(req, res);
    })

    //like pet
    app.put("/pet/up/:_id", function(req, res){
        pets.likePet(req, res);
    })

    //delete a pet
    app.delete('/pet/delete/:_id', function(req, res){
        pets.deletePet(req, res);
    })

    app.all("*", function(req, res) { 
        res.sendFile(path.resolve("./client/dist/index.html")) 
    });
}