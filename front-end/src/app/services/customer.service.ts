import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  public customerPhoneNumber: string = '';
  private _api = ''

  constructor() { }

  // GET
  get() {

  }
}
