import { AppState } from "../AppState.js";
import { Notepad } from "../models/Notepad.js";
import { loadState, saveState } from "../utils/Store.js";


class NotepadService {
    createNotepad(formData) {
        const newNotepad = new Notepad(formData)
        console.log('✨📒', newNotepad)
        AppState.notePad.push(newNotepad)
    }

    openNotepad(notepadId) {
        const notePad = AppState.notePad.find(notePad => notePad.id == notepadId)
        console.log('🫴', notePad)
        AppState.activeNotepad = notePad
        console.log(AppState.activeNotepad)
    }

    saveNotepad() {
        saveState('')
    }





}

export const notepadService = new NotepadService()