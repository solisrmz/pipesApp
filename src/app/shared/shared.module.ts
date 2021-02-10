import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PrimeModule } from '../prime.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [
    CommonModule,
    PrimeModule,
    RouterModule
  ], 
  exports: [
    MenuBarComponent
  ]
})
export class SharedModule { }
