import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.page.html',
  styleUrls: ['./update-note.page.scss'],
})
export class UpdateNotePage implements OnInit {
  notes: any = [];
  color: string = '';
  noteForm: FormGroup;

  filteredNotes: any = [];
  notesRed: any = [];
  notesPurple: any = [];
  notesGreen: any = [];
  notesYellow: any = [];

  isAlertOpen = false;
  alertButtons = ['Ok'];

  constructor(
    public fb: FormBuilder,
    private noteService: NoteService,
    private route: Router
  ) {
    this.noteForm = this.fb.group({
      content: ['', Validators.compose([Validators.required])],
      color: ['danger', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}

  updateNote(id: any) {
    if (this.noteForm.valid) {
      console.log('Valid note form:', this.noteForm.value);
      this.noteService.update(id, this.noteForm.value).subscribe((response) => {
        console.log('Your note was successfully updated');
      });
      this.getAllNotes();
      this.route.navigateByUrl('/note-list');
    } else {
      console.log('Invalid form.');
    }
  }

  getAllNotes() {
    this.noteService.getNotes().subscribe((response) => {
      this.filteredNotes = response;
      this.notes = response;
    });
  }
}
