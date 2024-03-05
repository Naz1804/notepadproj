export interface Note {
    id: number;
    title: string;
    text: string;
}

export const NOTES_KEY = 'my-notes';

export function getNotesFromLocalStorage(): Note[] {
    const savedNotes = localStorage.getItem(NOTES_KEY);
    if (savedNotes) {
        return JSON.parse(savedNotes);
    } else {
        return [];
    }
}

export function saveNotesToLocalStorage(notes: Note[]): void {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
}