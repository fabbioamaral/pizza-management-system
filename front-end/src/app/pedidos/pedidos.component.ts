import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  public clienteEncontrado: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarCliente() {
    this.clienteEncontrado = false;
  }

  cadastrarCliente(event: boolean) {
    //sempre virá true, fechando o modal
    this.clienteEncontrado = event;

    this.router.navigate(['/clientes']);



  }

  closeModal(event: boolean) {
    //sempre virá true, fechando o modal
    this.clienteEncontrado = event;
  }

}
