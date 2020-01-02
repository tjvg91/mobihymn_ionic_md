import { Component, Input, EventEmitter, Output } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  @Input() darkTheme: boolean;

  @Input()
  set appColor(value: string) {
    this.activeColorVal = value;
    this.activeColor = this.colorList.find(c => c.value === value).text;
  }
  get appColor(): string {
    return this.activeColorVal;
  }

  @Output() appColorChange = new EventEmitter<string>();

  @Output() darkThemeChange = new EventEmitter<string>();

  activeColor: string;
  activeColorVal: string;
  showPicker = false;
  colorList = environment.colorList;

  constructor() { }

  onThemeChange(e: CustomEvent) {
    this.darkThemeChange.emit(e.detail.checked);
  }

  onColorChange(c) {
    this.appColorChange.emit(c);
  }

  togglePicker(val: boolean) {
    if (val === null || val === undefined) {
      this.showPicker = !this.showPicker;
    } else {
      this.showPicker = val;
    }
  }
}
