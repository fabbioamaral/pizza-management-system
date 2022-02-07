import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() showModal: boolean = true;
  @Output() modalClosed = new EventEmitter<{modal: string, botao: string}>();
  @Input() modal: string = '';
  @ViewChild('btnCadastrar') cadastrarButton: ElementRef | undefined;
  @ViewChild('btnCancelar') cancelButton: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

 closeModal(button: HTMLButtonElement) {
  this.modalClosed.emit({
     modal: this.modal,
     botao: button.id
   })
 }



}
