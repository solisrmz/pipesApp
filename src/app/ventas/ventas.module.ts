import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeModule } from '../prime.module';

@NgModule({
  declarations: [NumerosComponent, NoComunesComponent, BasicosComponent, OrdenarComponent],
  imports: [
    CommonModule, 
    PrimeModule
  ], 
  exports: [
    BasicosComponent,
    NumerosComponent,
    NoComunesComponent, 
    OrdenarComponent, 
  ]
})
export class VentasModule { }
