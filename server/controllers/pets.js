var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    //get all pets
    getPets: function(req, res) {
        Pet.find({}, function(err, pet_list){
            if(err){
                console.log("@err getting pet_list: "+err);
                res.json({
                    message: "couldn't get pet list",
                    error: err
                })
            } else {
                console.log("found pet_list");
                res.json(pet_list);
            }
        })
    },

    //get one pet
    getOnePet: function(req, res) {
        console.log("@@@@inside pets.js getOnePet")
        Pet.findById(req.params._id, function(err, pet){
            if(err){
                console.log("@err getting pet: "+err);
                res.json({
                    message: "couldn't find pet",
                    error: err
                }) 
            }else {
                console.log("found pet");
                res.json(pet);
            }
        })
    },

    //add pet
    addPet: function(req, res) {
        console.log("inside add pet")
        var newPet = new Pet ({
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3
        })
        newPet.save(function(err, Pet){
            if(err) {
                console.log("@couldn't save Pet: "+err);
                res.json({
                    message: err.message
                });
            } else {
                console.log("@Pet saved")
                res.json(Pet);
            }
        })
    },

    //edit pet
    updatePet: function(req, res) {
        console.log("@@@inside updatePet");
        console.log(req.body,"this is the body")
        Pet.findOneAndUpdate(
            { "_id": req.params._id }, 
            { $set: { 
                "name": req.body.name,
                "type": req.body.type,
                "description": req.body.description,
                "skill1": req.body.skill1,
                "skill2": req.body.skill2,
                "skill3": req.body.skill3
                }
            }, {new: true}, function(err, Pet){
            if(err) {
                console.log("@@@error updating Pet: "+err)
                res.json({
                    message: err.message
                })
                throw err;
            } else {
                console.log("@@@updated Pet")
                let message = "Successfully updated"
                res.json({messages: message, pet: Pet});
            }
        });
    },

    //like pet
    likePet: function(req, res) {
        Pet.findByIdAndUpdate(req.params._id, { $inc: { likes: 1}}, function(err, Pet) {
            if(err){
                console.log("@Err upvoting: "+err);
                throw err;
            } else {
                console.log("@upvote success");
                res.json(Pet);
            }
        });
    },

    //delete pet
    deletePet: function(req, res) {
        Pet.findByIdAndRemove(req.params._id, function(err, Pet){
            if(err){
                console.log("@Couldn't delete Pet: "+err)
                throw err;
            } else {
                console.log("@Deleted Pet");
                res.json(Pet);
            }
        });
    }
}