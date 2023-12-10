import { AppState } from "../AppState.js";
import { Notepad } from "../models/Notepad.js";
import { loadState, saveState } from "../utils/Store.js";


class NotepadService {
    createNotepad(formData) {
        const newNotepad = new Notepad(formData)
        console.log('✨📒', newNotepad)
        AppState.notePad.push(newNotepad)
        this.saveNotepad()
    }

    openNotepad(notepadId) {
        const notePad = AppState.notePad.find(notePad => notePad.id == notepadId)
        console.log('🫴', notePad)
        AppState.activeNotepad = notePad
        console.log(AppState.activeNotepad)
    }

    saveNotepad(newBody) {

        console.log('new body coming into service: 📝🫲', newBody)
        const activeNotepad = AppState.activeNotepad
        activeNotepad.noteBody = newBody
        AppState.emit('activeNotepad')
        saveState('notePad', AppState.notePad)
        console.log('service notepad:', newBody)
        console.log('Active notepad:', activeNotepad)
    }





}

export const notepadService = new NotepadService()