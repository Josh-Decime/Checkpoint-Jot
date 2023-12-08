import { AppState } from "../AppState.js";
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
        _drawNotepadList()
    }

    // createNotepad(){
    //     event.preventDefault()
    //     const form = event.target
    //     const formData = getFormData(form)
    //     formData.editedTime = formData.editedTime.
    // }

}

