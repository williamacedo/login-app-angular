import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = ''

  @Output() buttonAction: EventEmitter<any> = new EventEmitter();

  emitButtonClick() {
    this.buttonAction.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
