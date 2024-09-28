import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'note-list',
    loadChildren: () =>
      import('./note-list/note-list.module').then((m) => m.NoteListPageModule),
  },
  {
    path: '',
    redirectTo: 'note-list',
    pathMatch: 'full',
  },
  {
    path: 'note-list/add-note',
    loadChildren: () =>
      import('./note-list/note-list.module').then((m) => m.NoteListPageModule),
  },
  {
    path: '',
    redirectTo: 'note-list/add-note',
    pathMatch: 'full',
  },
  {
    path: 'update-note/:id',
    loadChildren: () =>
      import('./update-note/update-note.module').then(
        (m) => m.UpdateNotePageModule
      ),
  },
  {
    path: '',
    redirectTo: 'update-note',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
