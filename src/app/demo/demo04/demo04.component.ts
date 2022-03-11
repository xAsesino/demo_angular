import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.scss']
})
export class Demo04Component implements OnInit {

  affiche : boolean = false;

  liste : string[] = ["Bonjour", "Hello", "Hola", "Ciao Simon"];

  choix : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  toggleAffiche() : void{
    this.affiche = !this.affiche
  }

}
