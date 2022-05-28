import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
}]
})
export class InputComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() value: string = '';

  onChange: (_: any) => void = (_: any) => {};
  onTouched: () => void = () => {};

  constructor() { }

  updateChanges() {
    this.onChange(this.value);
  }

  ngOnInit(): void {
  }

  writeValue(value: string): void {
    this.value = value;
    this.updateChanges();
}

registerOnChange(fn: any): void {
    this.onChange = fn;
}

registerOnTouched(fn: any): void {
    this.onTouched = fn;
}

}
