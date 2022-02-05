import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  public clienteEncontrado: boolean = true;
  @ViewChild('phoneNumberField') phoneNumber: ElementRef | undefined;

  constructor(
    private customerService: CustomerService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  buscarCliente() {
    this.clienteEncontrado = false;
  }

  cadastrarCliente(event: boolean) {
    //sempre virá true, fechando o modal
    this.clienteEncontrado = event;
    this.customerService.customerPhoneNumber = this.phoneNumber?.nativeElement.value;
    this.router.navigate(['/clientes']);
  }

  closeModal(event: boolean) {
    //sempre virá true, fechando o modal
    this.clienteEncontrado = event;
  }

  onEditCustomer() {

  }

}
