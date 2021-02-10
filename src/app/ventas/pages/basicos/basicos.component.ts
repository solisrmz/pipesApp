import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombre: string= 'abraham';
  nombreUpper: string = 'ABRAHAM';
  nombreCompleto: string = 'AbraHam SoLis';
  constructor() { }

  ngOnInit(): void {
  }

}
