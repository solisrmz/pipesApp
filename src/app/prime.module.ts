import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem, PrimeIcons} from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule, 
    MenubarModule, 
  ], 
  exports: [
    ButtonModule,
    CardModule, 
    MenubarModule
  ]
})
export class PrimeModule { }
