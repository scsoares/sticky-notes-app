import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.page.html',
  styleUrls: ['./note-list.page.scss'],
})
export class NoteListPage implements OnInit {
  notes: any = [];
  color: string = '';
  noteForm: FormGroup;

  filteredNotes: any = [];
  notesRed: any = [];
  notesPurple: any = [];
  notesGreen: any = [];
  notesYellow: any = [];

  allColors: any = ['red', 'purple', 'green', 'yellow'];

  constructor(
    public formBuilder: FormBuilder,
    private noteService: NoteService,
    private route: Router
  ) {
    this.noteForm = this.formBuilder.group({
      content: ['', Validators.compose([Validators.required])],
      color: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getAllNotes();
  }

  addNote() {
    if (this.noteForm.valid) {
      console.log('Valid note form:', this.noteForm.value);
      this.noteService.create(this.noteForm.value).subscribe((response) => {
        this.route.navigateByUrl('/note-list/add-note');
      });
    } else {
      console.log('Invalid form.');
    }
  }

  getFormControl(field: string) {
    return this.noteForm.get(field);
  }

  getAllNotes() {
    this.noteService.getNotes().subscribe((response) => {
      this.filteredNotes = response;
      this.notes = response;
    });
  }

  getAllNotesRed() {
    this.notesRed = [];
    for (let n of this.notes) {
      if (n.color == 'danger') {
        this.notesRed.push(n);
      }
    }

    this.filteredNotes = this.notesRed;
  }

  getAllNotesPurple() {
    this.notesPurple = [];

    for (let n of this.notes) {
      if (n.color == 'tertiary') {
        this.notesPurple.push(n);
      }
    }

    this.filteredNotes = this.notesPurple;
  }

  getAllNotesGreen() {
    this.notesGreen = [];
    for (let n of this.notes) {
      if (n.color == 'success') {
        this.notesGreen.push(n);
      }
    }

    this.filteredNotes = this.notesGreen;
  }

  getAllNotesYellow() {
    this.notesYellow = [];
    for (let n of this.notes) {
      if (n.color == 'warning') {
        this.notesYellow.push(n);
      }
    }

    this.filteredNotes = this.notesYellow;
  }

  checkColor(colorName: string) {
    const color: any = document.getElementById(colorName);

    color.innerHTML = `<ion-icon slot="icon-only" name="checkmark-outline"></ion-icon>`;
  }
}
