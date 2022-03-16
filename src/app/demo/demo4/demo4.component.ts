import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {
  
  affiche : boolean = false;

  liste : string[] = ["Bonjour", "Hello", "Hola", "Ciao"];
  boisson : string[] = ['coca','fanta','cafe'];

  choixBoisson : string ="";
  choixNombre : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAffiche(){
    this.affiche = !this.affiche;
  }

  showDrink(index:number):string{
    return this.boisson[index];
  }
}
