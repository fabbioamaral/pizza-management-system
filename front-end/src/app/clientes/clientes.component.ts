import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private router: Router
    ) { }

    ngOnInit(): void {
      if(this.customerService.customerPhoneNumber)
        this.formRegisterCustomer.get('phoneNumber')?.setValue(this.customerService.customerPhoneNumber);
    }

  formRegisterCustomer = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.maxLength(120)]),
    phoneNumber: new FormControl('',[
      Validators.required]),
    cep: new FormControl(''),
    street: new FormControl('',[
      Validators.required]),
    houseNumber: new FormControl('',[
      Validators.required]),
    neighborhood: new FormControl('',[
      Validators.required]),
    cidade: new FormControl('',[
      Validators.required,
      Validators.maxLength(50)]),
    additionalInfo: new FormControl(''),
    reference: new FormControl('')
  });

  consultaCEP() {

  }

  registerCustomer() {

  }

}
