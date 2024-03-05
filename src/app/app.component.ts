import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NotesListComponent } from '../notes-list/notes.component';
import { AddNoteComponent } from '../add-note/add-note.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, NotesListComponent, AddNoteComponent, RouterModule],
})
export class AppComponent {
  title = 'notepadproj';
}
