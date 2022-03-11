import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.scss']
})
export class Demo02Component implements OnInit {

  maChaine : string = "Bonjour les développeurs full stack web";
  monNombre : number = 15.23328546;
  dateDuJour : Date = new Date();
  maTemp : number = 14;

  constructor() { }

  ngOnInit(): void {
  }

}
