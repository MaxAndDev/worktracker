import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Time } from '@angular/common';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  constructor() { }

  start: number;
  pause: Date;
  ende: Date;
  date: Date;

  ngOnInit() {
  }

  submit(){
    console.log(this.start)
    console.log(this.date.setHours(12))
    console.log(this.date.setMinutes(12))
    console.log(this.date.toTimeString())
    
    
  }

}
