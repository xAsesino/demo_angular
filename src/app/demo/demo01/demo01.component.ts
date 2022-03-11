import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component implements OnInit {

  maChaine : string = "Bonjour Rémi, tu es un Simon";
  myName : string = "Rémi";
  myMood : string = ":')";

  estCliquable : boolean = false;

  myPlaceHolder : string = "Entrez un Simon";

  constructor() { }

  ngOnInit(): void {
  }

  pasContent(){
    this.myMood = ":'("
  }

  toggleCliquable() : void{
    this.estCliquable = !this.estCliquable;
  }
}
