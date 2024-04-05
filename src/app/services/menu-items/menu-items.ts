import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [ 
  { state: 'finance', type: 'link', name: 'Rapor', icon: 'grid_on' },
  { state: 'financeDetail', type: 'link', name: 'Rapor2', icon: 'grid_on' },
];

@Injectable({
  providedIn: 'root'
})
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
