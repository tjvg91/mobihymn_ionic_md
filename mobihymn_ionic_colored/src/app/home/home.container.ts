import { Component } from '@angular/core';
import { mobihymnSettingsQuery } from '../store/mobihymn-settings';

@Component({
    selector: 'app-home-cont',
    templateUrl: 'home.container.html',
})
export class HomeContPage {
    public dark$ = mobihymnSettingsQuery.select(q => q.dark);
    public color$ = mobihymnSettingsQuery.select(q => q.color);
    constructor() { }

}
