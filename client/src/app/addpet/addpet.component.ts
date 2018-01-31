import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  newPet: any;
  messages: any;

  constructor(
    private dataservice: DataService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.newPet = {
      name: "",
      type: "",
      description: "",
      skill1: "",
      skill2: "",
      skill3: ""
    }
  }

  addPet(){
    console.log(this.newPet);
    let obs = this.dataservice.addPet(this.newPet);
    obs.subscribe(data => {
      if (data['message']){
        this.messages = data['message']
      } else {
      this.dataservice.messages = "Successfully added "+this.newPet.name+"!"
      console.log(this.dataservice.messages);
      this.goHome()
      }
    })
    
  }

  goHome(){
    this.router.navigateByUrl("/");
  }
}
