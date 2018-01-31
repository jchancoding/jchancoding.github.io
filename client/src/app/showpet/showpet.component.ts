import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-showpet',
  templateUrl: './showpet.component.html',
  styleUrls: ['./showpet.component.css']
})
export class ShowpetComponent implements OnInit {
  thispet: any;

  constructor(
    private dataservice: DataService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.thispet = this.dataservice.pet;
    this.getOnePet();
    console.log("@@@@@@@@@@@@"+this.thispet._id);
  }

  getOnePet() {
    let obs = this.dataservice.getOnePet(this.thispet._id);
      obs.subscribe(data => {
        console.log("@@@@@@@data from getOnePet: "+data)
        this.thispet = data
      })
  }

  likePet() {
    let obs = this.dataservice.likePet(this.thispet);
    obs.subscribe(data => {
      console.log("liked pet")
    })
    this.getOnePet();
  }

  adoptPet() {
    let obs = this.dataservice.deletePet(this.thispet._id);
    obs.subscribe(data => {
      console.log("adopted pet")
      this.dataservice.messages = "Great! Come to the center to fill out paperwork for "+this.thispet.name;
    })
    this.router.navigateByUrl("/");
  }
}
