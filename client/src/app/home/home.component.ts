import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  petlist: any;  
  messages: any;

  constructor(
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.messages = this.dataservice.messages;
    console.log(this.messages)
    console.log("@@@in init")
    this.getpets();
  }

  getpets() {
    console.log("inside getpets")
    let obs = this.dataservice.getPets();
      obs.subscribe(data => {
        this.petlist = data
      })
  }

  getmessages() {
    console.log("gets messages")
    let obs = this.dataservice.messages;
      obs.subscribe(data => {
        this.messages = data
      })
  }

  setPet(pet) {
    this.dataservice.messages = "";
    this.dataservice.pet = pet;
    console.log(this.dataservice.pet);
  }
}