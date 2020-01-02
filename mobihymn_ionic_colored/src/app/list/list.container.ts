import { Component, OnInit } from '@angular/core';
import { mobihymnSettingsQuery } from '../store/mobihymn-settings';
import { mobihymnMidiQuery } from '../store/mobihymn-midi';

@Component({
    selector: 'app-list-cont',
    templateUrl: 'list.container.html',
})
export class ListContPage implements OnInit {
    public dark$ = mobihymnSettingsQuery.select(q => q.dark);
    public color$ = mobihymnSettingsQuery.select(q => q.color);
    public hymnList$ = mobihymnMidiQuery.selectAll();

    constructor() { }

    ngOnInit() {
    }
}
