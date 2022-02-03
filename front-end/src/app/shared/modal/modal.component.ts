import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() showModal: boolean = true;
  @Output() closeButtonClick = new EventEmitter<boolean>();
  @Output() registerButtonClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onCadastrar() {
    this.registerButtonClick.emit(true);
  }

  onCloseModal() {
    this.closeButtonClick.emit(true);
  }



}
