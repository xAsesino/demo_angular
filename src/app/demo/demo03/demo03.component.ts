import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.scss']
})
export class Demo03Component implements OnInit {

  currentStyles : any;

  italic : boolean = false;
  bold : boolean = false;
  size : boolean = false;

  class : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentstyl(){
    this.currentStyles = {
      'font-style' : this.italic ? 'italic' : 'normal',
      'font-weight' : this.bold ? 'bold' : 'normal',
      'font-size' : this.size ? '3rem' : '1rem'
    };
  }

  toggleItalic(){
    this.italic = !this.italic;
    this.setCurrentstyl();
  }

  toggleBold(){
    this.bold = !this.bold;
    this.setCurrentstyl();
  }

  toggleSize(){
    this.size = !this.size;
    this.setCurrentstyl();
  }

  toggleClass(){
    this.class = !this.class
  }

}
