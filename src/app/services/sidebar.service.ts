import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[]=[
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/'
        },
        {
          title: 'Progress Bar',
          url: 'progress'
        },
        {
          title: 'Grafica 1',
          url: 'grafica1'
        },
        {
          title: 'Promesas',
          url: 'promises'
        },
        {
          title: 'RxJs',
          url: 'rxjs'
        },
      ]
    }
  ];

  constructor() { }
}
