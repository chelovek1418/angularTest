import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.css']
})
export class ModalBaseComponent implements OnInit {

  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeModal () {
      this.onClose.emit();
  }

}
