import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
  newPet: any;
  messages: any;

  constructor(
    private dataservice: DataService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.newPet = this.dataservice.pet
  }

  editPet(){
    console.log("inside editPet: "+this.newPet)
    let obs = this.dataservice.editPet(this.newPet);
    obs.subscribe(data => {
      if (data['message'] != "Successfully updated"){
        this.messages = data['message']
      } else {
      this.dataservice.messages = "Successfully added "+this.newPet.name+"!"
      console.log(this.dataservice.messages);
      }   
    })
    this.goDetails()
  }
  
  goDetails(){
    this.router.navigateByUrl("details")
  }
}
