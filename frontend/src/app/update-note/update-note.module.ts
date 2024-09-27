import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateNotePageRoutingModule } from './update-note-routing.module';

import { UpdateNotePage } from './update-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateNotePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdateNotePage],
})
export class UpdateNotePageModule {}
