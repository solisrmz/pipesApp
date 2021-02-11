import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'Luisa Solis Ramirez';
  genero: string = 'femenino';
  opciones = {
    'masculino': 'desarrollador', 
    'femenino': 'desarrolladora'
  }

  clientes: string[] = ['Jose', 'Pedro', 'Maria'];
  clientesOpciones = {
    '=0': 'no tenemos clientes',
    '=1': '1 cliente esperando', 
    '=2': '2 clientes esperando', 
    'other': '# clientes esperando'
  }

  persona = {
    nombre: 'Abraham', 
    edad: 25, 
    direcccion: 'Xalapa'
  }

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
      setTimeout(() =>{
        resolve('Promesa resuelta')
      }, 3500)
  });

  constructor(private primeNgConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }

  cambiarNombre(){
    this.nombre = 'Jose Abraham Solis'; 
    this.genero = 'masculino';
  }

  borrarClientes(){
    this.clientes = [];
  }

}
