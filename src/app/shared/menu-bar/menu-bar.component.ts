import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Pipes de Angular',
                icon: PrimeIcons.DESKTOP,
                items: [
                    {
                        label: 'Textos y fechas', 
                        icon: 'pi pi-align-left',
                        routerLink: '/'
                        
                    }, 
                    {
                        label: 'numeros', 
                        icon: 'pi pi-dollar',
                        routerLink: 'numeros'
                    }, 
                    {
                        label: 'no-comunes',
                        icon: 'pi pi-globe', 
                        routerLink: 'no-comunes'
                    }
                ]
            },
            {
                label: 'Pipes personalizados', 
                icon: 'pi pi-cog', 
                routerLink: 'ordenar'
            }
        ];
    }

}
