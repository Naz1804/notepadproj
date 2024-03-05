import { Component, inject } from '@angular/core';
import { Note, saveNotesToLocalStorage, getNotesFromLocalStorage } from '../notes';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css',
  imports: [RouterModule],
})
export class NoteDetailComponent {
    router = inject(Router)
    activeRoute = inject(ActivatedRoute);
    id = Number(this.activeRoute.snapshot.paramMap.get('id'));

    notes = getNotesFromLocalStorage();

    note = this.notes.find((i) => i.id === this.id);

    deleteBtn() {
        this.router.navigateByUrl('/');
        if (this.note) {
            let delNote = this.notes.indexOf(this.note, 0);
            this.notes.splice(delNote, 1);
            saveNotesToLocalStorage(this.notes);
        }
    }
}