import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";





export class Notepad {
    /** */
    constructor(data) {
        this.id = generateId()
        this.noteName = data.noteName
        this.noteBody = data.noteBody || ''
        this.editedTime = data.editedTime
        console.log('new notepad 📓', this)
    }

    get notepadListItem() {
        return `
   <div class="d-flex justify-content-around m-3 bg-secondary">
    <span>${this.noteName}</span>
    <span>${this.editedTime}</span>
    <span>
        <button onclick="app.NotepadController.openNotepad('${this.id}')" class="btn btn-outline-primary"
            title="open Notepad"><i class="mdi mdi-notebook-edit"></i></button>
    </span>
</div>
        `
    }

    get activeNotepadTemplate() {
        return `
        <div>
    <h1 class="fw-bold">${this.noteName}</h1>
    <p>${this.editedTime}</p>
    <div>
        <button onclick="app.NotepadController.saveNotepad()" class="btn btn-success"><i
                class="mdi mdi-content-save">Save!</i></button>
    </div>
    <textarea name="activeNotepad" id="active-notepad-body" cols="30" rows="10"
        maxlength="50000">${this.noteBody}</textarea>
</div>
        `
    }

}