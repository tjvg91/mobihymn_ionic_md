import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { SettingsContPage } from './settings.container';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsContPage
      }
    ])
  ],
  declarations: [SettingsPage, SettingsContPage]
})
export class SettingsPageModule { }
