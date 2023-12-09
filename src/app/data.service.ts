import { Injectable } from '@angular/core';
import { Userdata } from './userdata';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getdata(){
    return of(Userdata)
  }
}
