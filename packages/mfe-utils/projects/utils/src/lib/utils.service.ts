import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {
    console.log('UtilsService constructor');
  }

  getTitle() {
    return 'MFE Utils';
  }
}
