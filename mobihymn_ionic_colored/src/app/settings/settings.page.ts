import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  @Input() darkTheme: boolean;

  @Input() appColor: string;

  @Output() appColorChange = new EventEmitter<string>();

  @Output() darkThemeChange = new EventEmitter<string>();

  colorList = [{
    text: 'Blue',
    value: 'primary'
  }, {
    text: 'Purple',
    value: 'secondary'
  }, {
    text: 'Pink',
    value: 'tertiary'
  }, {
    text: 'Green',
    value: 'success'
  }, {
    text: 'Yellow',
    value: 'warning'
  }, {
    text: 'Red',
    value: 'danger'
  }, {
    text: 'Orange',
    value: 'orange'
  }, {
    text: 'Brown',
    value: 'brown'
  }];

  constructor() { }

  onThemeChange(e: CustomEvent) {
    this.darkThemeChange.emit(e.detail.checked);
  }

  onColorChange(e: CustomEvent) {
    this.appColorChange.emit(e.detail.value);
  }
}
