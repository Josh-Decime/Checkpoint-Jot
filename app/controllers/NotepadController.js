import { AppState } from "../AppState.js";
import { notepadService } from "../services/NotepadService.js";
import { getFormData } from "../utils/FormHandler.js";


function _drawNotepadList() {
    console.log('drawing notepad')
    const notePad = AppState.notePad
    let content = ''
    notePad.forEach(notePad => content += notePad.notepadListItem)
    document.getElementById('notepad-list').innerHTML = content
}

function _drawActiveNotepad() {
    console.log('✒️ drawing active')
    const activeNotepad = AppState.activeNotepad
    let content = activeNotepad.activeNotepadTemplate
    document.getElementById('active-notepad').innerHTML = content
}



export class NotepadController {
    constructor() {
        console.log('📝 notepad controller is connected')
        AppState.on('activeNotepad', _drawActiveNotepad)
        AppState.on('notePad', _drawNotepadList)
        _drawNotepadList()
    }

    createNotepad() {
        console.log('begin creating a note')

        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        // formData.editedTime = formData.editedTime.replaceAll('-', '/')
        console.log('➕📒', formData)
        notepadService.createNotepad(formData)
        // @ts-ignore
        form.reset()
    }

    openNotepad(notePadID) {
        console.log('📖 opening Notepad', notePadID)
        notepadService.openNotepad(notePadID)
    }

    saveNotepad() {
        console.log('💾 saving')
        const newBody = document.getElementById('active-notepad-body').value
        console.log('new notes: ✨📝', newBody)
        notepadService.saveNotepad(newBody)
    }

}

