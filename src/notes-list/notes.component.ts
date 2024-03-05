import { Component } from "@angular/core";
import { getNotesFromLocalStorage } from "../notes";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-notes-list',
    standalone: true,
    templateUrl: './notes-list.component.html',
    styleUrl: './notes-list.component.css',
    imports: [RouterModule],
})
export class NotesListComponent {
    notes = getNotesFromLocalStorage();

    show(title: string) {
        alert(title);
    }
}