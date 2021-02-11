import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interface/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  mayusculas: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Hulk', 
      vuela: false,
      color: Color.azul 
    },
    {
      nombre: 'Batman', 
      vuela: false,
      color: Color.rojo 
    }, 
    {
      nombre: 'Iron Man', 
      vuela: true,
      color: Color.verde 
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  

}
