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



export class NotepadController {
    constructor() {
        console.log('📝 notepad controller is connected')
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

}

