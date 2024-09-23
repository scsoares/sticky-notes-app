import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteListPageRoutingModule } from './note-list-routing.module';

import { NoteListPage } from './note-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NoteListPageRoutingModule,
  ],
  declarations: [NoteListPage],
})
export class NoteListPageModule {}
