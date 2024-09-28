import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note.service';
import { NoteListPage } from '../note-list/note-list.page';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.page.html',
  styleUrls: ['./update-note.page.scss'],
})
export class UpdateNotePage implements OnInit {
  notes: any = [];
  color: string = '';
  noteForm: FormGroup;
  noteId: any = '';

  filteredNotes: any = [];
  notesRed: any = [];
  notesPurple: any = [];
  notesGreen: any = [];
  notesYellow: any = [];

  isAlertOpen = false;
  alertButtons = ['Ok'];

  constructor(
    private route2: ActivatedRoute,
    public fb: FormBuilder,
    private noteService: NoteService,
    private route: Router
  ) {
    this.noteForm = this.fb.group({
      content: ['', Validators.compose([Validators.required])],
      color: ['danger', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    this.route2.paramMap.subscribe((params) => {
      this.noteId = params.get('id');
      console.log('Received Note ID:', this.noteId);
    });
  }

  updateNote() {
    if (this.noteForm.valid) {
      console.log('Valid note form:', this.noteForm.value);
      this.noteService
        .update(this.noteId, this.noteForm.value)
        .subscribe((response) => {
          console.log('Your note was successfully updated');
        });
      this.getAllNotes();
      this.route.navigateByUrl('/note-list');
      this.getAllNotes();
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
