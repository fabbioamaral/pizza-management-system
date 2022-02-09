import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente-modal',
  templateUrl: './editar-cliente-modal.component.html',
  styleUrls: ['./editar-cliente-modal.component.css']
})
export class EditarClienteModalComponent implements OnInit {
  @Input() showModal: boolean = true;
  @Output() modalClosed = new EventEmitter<{modal: string, botao: string}>();
  @Input() modal: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  formEditCustomer = new FormGroup({
    name: new FormControl(''),
    phoneNumber: new FormControl(''),
    formAddress1: new FormGroup({
      street: new FormControl(''),
      houseNumber: new FormControl(''),
      additionalInfo: new FormControl(''),
      neighborhood: new FormControl(''),
      cidade: new FormControl(''),
      reference: new FormControl(''),
    })
    // formAddress2: new FormGroup({
    //   street: new FormControl(''),
    //   houseNumber: new FormControl(''),
    //   additionalInfo: new FormControl(''),
    //   neighborhood: new FormControl(''),
    //   cidade: new FormControl(''),
    //   reference: new FormControl(''),
    // })
  })

  onCloseModal(button: HTMLButtonElement) {
    this.modalClosed.emit({
      modal: 'editarCliente',
      botao: button.id
    })
  }

  onSalvar() {

  }


}
