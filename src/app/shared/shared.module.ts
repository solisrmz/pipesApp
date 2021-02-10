import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PrimeModule } from '../prime.module';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [
    CommonModule,
    PrimeModule
  ], 
  exports: [
    MenuBarComponent
  ]
})
export class SharedModule { }
