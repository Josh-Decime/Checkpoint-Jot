import { AppState } from "../AppState.js";
import { Notepad } from "../models/Notepad.js";
import { notepadService } from "../services/NotepadService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


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

function _drawLoopFunction() {
    const notepadCount = AppState.loopFunction()
    document.getElementById('note-count').innerHTML = notepadCount.toString()
}

function _drawListAndLoop() {
    _drawNotepadList()
    _drawLoopFunction
}

// NOTE note count
// function _drawNoteCount(){
//     console.log('Counting Notes: ➕')
//     const noteCount = AppState.noteCount
//     let content = Notepad.currentNoteCount()
// }



export class NotepadController {
    constructor() {
        console.log('📝 notepad controller is connected')
        AppState.on('activeNotepad', _drawActiveNotepad)
        AppState.on('notePad', _drawNotepadList)
        // AppState.on('notePad', _drawNotepadList, _drawLoopFunction)
        // AppState.on('notePad', _drawListAndLoop)
        // AppState.on('note-count', _drawLoopFunction)
        // _drawNotepadList() //replaced by loaded in data
        notepadService.loadNotepad()
        // _drawLoopFunction()
    }

    createNotepad() {
        console.log('begin creating a note')

        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        // formData.editedTime = formData.editedTime.replaceAll('-', '/')
        // formData.createdTime = formData.createdTime.replaceAll('-', '/')
        console.log('➕📒', formData)
        notepadService.createNotepad(formData)
        // @ts-ignore
        form.reset()
    }

    openNotepad(notePadID) {
        console.log('📖 opening Notepad', notePadID)
        notepadService.openNotepad(notePadID)
    }

    saveActiveNotepad() {
        console.log('💾 saving')
        const newBody = document.getElementById('active-notepad-body').value
        console.log('new notes: ✨📝', newBody)
        notepadService.saveActiveNotepad(newBody)
    }

    async removeNotepad(noteId) {
        let isConfirmed = await Pop.confirm("Are you sure you want to delete this?", 'Those notes might be important', 'Yes, delete it', 'error')
        if (isConfirmed) {
            console.log('🔥Deleting note', noteId)
            notepadService.removeNote(noteId)
        }
    }

}

