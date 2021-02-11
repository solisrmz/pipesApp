import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {
  ventas: number = 218542384161;
  porcentaje: number = 0.48; 
  constructor() { }

  ngOnInit(): void {
  }

}
