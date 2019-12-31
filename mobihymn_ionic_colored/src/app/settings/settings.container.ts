import { Component } from '@angular/core';
import { mobihymnSettingsQuery } from '../store/mobihymn-settings';
import { updateTheme, updateColor } from '../store/mobihymn-settings';

@Component({
    selector: 'app-settings-cont',
    templateUrl: './settings.container.html',
})
export class SettingsContPage {
    public dark$ = mobihymnSettingsQuery.select(q => q.dark);
    public color$ = mobihymnSettingsQuery.select(q => q.color);
    constructor() { }

    onDarkThemeChange(val: boolean) {
        updateTheme(val);
    }

    onAppColorChange(val: string) {
        updateColor(val);
    }
}
