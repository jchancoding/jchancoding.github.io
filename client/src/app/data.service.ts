import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  pet: any;
  messages: any;

  constructor(private _http: HttpClient) { }

  //get all pets
  getPets() {
    return this._http.get('/pets');
  }

  //get single pet
  getOnePet(petid) {
    console.log("@@@@ inside dataservice getOnePet")
    console.log("url id"+petid)
    return this._http.get('/pet/get/'+petid)
  }

  //create pet
  addPet(pet) {
    console.log("@inside dataservice addPet")
    return this._http.post('/pet/add', pet);
  }

  //edit pet
  editPet(updatedPet) {
    console.log('inside data.editPet')
    return this._http.put('/pet/update/'+updatedPet._id, updatedPet);
  }

  //like pet
  likePet(likedpet) {
    return this._http.put('/pet/up/'+likedpet._id, likedpet)
  }
  
  //delete
  deletePet(pet_id) {
    return this._http.delete('/pet/delete/'+pet_id)
  }

}
