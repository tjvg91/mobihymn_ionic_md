import { Component } from '@angular/core';
import { mobihymnSettingsQuery } from './store/mobihymn-settings';

@Component({
    selector: 'app-root-container',
    templateUrl: 'app.container.html'
})

export class AppContainer {
    public dark$ = mobihymnSettingsQuery.select(q => q.dark);
    public color$ = mobihymnSettingsQuery.select(q => q.color);
    constructor() {
    }
}
