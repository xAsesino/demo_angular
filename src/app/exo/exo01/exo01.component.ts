import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo01',
  templateUrl: './exo01.component.html',
  styleUrls: ['./exo01.component.scss']
})
export class Exo01Component implements OnInit {

  title: string = "Chronométre";

  chronoMin: number = 0;
  chronoSec: number = 0;

  timer : any

  constructor() { }

  ngOnInit(): void {
  }

  toggleStart() {
    this.timer = setInterval( () => {this.chronoMin++}, 1000);
  }

  togglePause(){
    clearInterval(this.timer)
    this.timer = null
  }

  toggleReset(){
    this.togglePause();
    this.chronoMin = 0;
  }

  // My VERSION // 

  // startBtn: boolean = false;
  // pauseBtn: boolean = false;
  // stopBtn: boolean = false;
  // timerIdMin: number = 0;
  // timerIdSec: number = 0;

    // timerMin : ReturnType<typeof setTimeout> = setInterval(() => { }, 500);
   // timerSec : ReturnType<typeof setTimeout> = setInterval(() => { this.chronoSec++ }, 10);

  // toggleStart(): void {

  //   this.startBtn = !this.startBtn;

  //   if (this.startBtn) {

  //     // this.timerMin;
  //     // this.timerSec;
  //     // setInterval(() => {this.timerSec})
  //     // setInterval(() => {this.timerMin})

  //     // this.timerIdMin = setInterval(() => { this.chronoMin++ })
  //     this.timerIdSec = setInterval(() => { this.chronoSec++ })

  //     if (this.chronoSec >= 60) {
  //       this.chronoMin++;
  //       this.chronoSec = 0;
  //     }

  //   }

  // }

  // togglePause(): void {
  //   this.pauseBtn = !this.pauseBtn;
  //   clearInterval(this.chronoMin);
  //   clearInterval(this.timerIdSec);
  //   this.startBtn = false
  // }

  // toggleReset(): void {
  //   this.stopBtn = !this.stopBtn;
  //   this.chronoMin = 0;
  //   this.chronoSec = 0;
  // }

}
