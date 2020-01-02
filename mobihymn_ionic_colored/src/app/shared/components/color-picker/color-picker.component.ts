import { Component, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  @Input() show: boolean;
  @Input() color: string;
  @Output() colorChange = new EventEmitter<string>();
  @Output() showChange = new EventEmitter<boolean>();

  colorList = environment.colorList;

  constructor() { }

  onColorPicked(value: string) {
    this.colorChange.emit(value);
  }

  toggleShow() {
    this.showChange.emit(!this.show);
  }
}
