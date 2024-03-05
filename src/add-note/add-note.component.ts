import { Component, inject } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Note, saveNotesToLocalStorage, getNotesFromLocalStorage } from "../notes";
import { Router } from "@angular/router";

@Component({
    selector: 'app-add-note',
    standalone: true,
    templateUrl: './add-note.component.html',
    styleUrl: './add-note.component.css',
    imports: [ReactiveFormsModule],
})
export class AddNoteComponent {
    router = inject(Router);
    NOTES: Note[] = getNotesFromLocalStorage();

    addNoteForm = new FormGroup({
        title: new FormControl('', Validators.required),
        text: new FormControl(''),
    });
    addNote() {
        let title = this.addNoteForm.value.title ?? '';
        let text = this.addNoteForm.value.text ?? '';

        if (this.addNoteForm.valid) {
            let ids = this.NOTES.map((a) => a.id);
            let maxId = 0;
            if (ids.length > 0) {
                maxId = Math.max(...ids);
            }
            let newNote = {
                id: maxId + 1,
                title: title,
                text: text,
            };
            this.NOTES.unshift(newNote);
            saveNotesToLocalStorage(this.NOTES);
            this.addNoteForm.reset();
            
            this.router.navigateByUrl('/')
        }
    }
}