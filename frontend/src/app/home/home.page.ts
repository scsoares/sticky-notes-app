import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  shops: Array<any> = [
    {
      address: 'calle lujan perez',
      telephone: '94958989',
    },
    {
      address: 'calle josé velez',
      telephone: '94958989',
    },
  ];

  constructor() {}
}
