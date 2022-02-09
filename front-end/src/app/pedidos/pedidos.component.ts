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
  public adicionarNovoEndereco: boolean = false;
  public editarCliente: boolean = false;
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

  closeModal(event: {modal: string, botao: string}) {
    if(event.modal === 'clienteNaoEncontrado') this.clienteEncontrado = true;
    if(event.modal === 'adicionarNovoEndereco') this.adicionarNovoEndereco = false;
    if(event.modal === 'editarCliente') this.editarCliente = false;

  }

  onEditCustomer() {
    this.editarCliente = true;
  }

  novoEndereco() {
    this.adicionarNovoEndereco = true;
  }

}
