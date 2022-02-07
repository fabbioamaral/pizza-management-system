import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-endereco',
  templateUrl: './novo-endereco.component.html',
  styleUrls: ['./novo-endereco.component.css']
})
export class NovoEnderecoComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Output() modalClosed = new EventEmitter<{modal: string, botao: string}>();
  @Input() modal: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  formNewAddress = new FormGroup({
    cep: new FormControl(''),
    street: new FormControl(''),
    houseNumber: new FormControl(''),
    additionalInfo: new FormControl(''),
    neighborhood: new FormControl(''),
    cidade: new FormControl(''),
    reference: new FormControl(''),

  })

  onCloseModal(button: HTMLButtonElement) {
    this.modalClosed.emit({
      modal: 'adicionarNovoEndereco',
      botao: button.id
    })
  }

  onSalvar() {

  }

  consultaCEP() {

  }


}
