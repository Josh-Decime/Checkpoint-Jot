import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";





export class Notepad {
    // /** @param {}*/
    constructor(data) {
        this.id = generateId()
        this.noteName = data.noteName
        this.noteColor = data.noteColor
        this.noteBody = data.noteBody || ''
        this.editedTime = data.editedTime
        this.createdTime = new Date(data.createdTime)
        console.log('new notepad 📓', this)

        // NOTE building note count
        // this.noteCount = AppState.noteCount
    }

    get notepadListItem() {
        return `
   <div class="d-flex justify-content-between my-2 px-2 bg-secondary">
    <span>${this.noteName}</span>
    <span>${this.ShortDate}</span>
    <span>
        <button onclick="app.NotepadController.openNotepad('${this.id}')" style="color: ${this.noteColor}" class="btn"
        title="open Notepad"><i class="mdi mdi-notebook-edit"></i></button>
    </span>
</div>
        `
    }

    get activeNotepadTemplate() {
        return `
<div class="container-fluid">
    <div class="row justify-content-center">
        <h1 class="fw-bold rounded text-center m-2 mt-3" style="background-color: ${this.noteColor};">${this.noteName}</h1>
        <p>${this.ShortDate}</p>
        <div class="col-12 col-md-9 d-flex justify-content-between mb-3">
            <button onclick="app.NotepadController.saveActiveNotepad()" class="btn btn-success"
                title="Yeah, good idea to save that!"><i class="mdi mdi-content-save">Save!</i></button>
            <button onclick="app.NotepadController.removeNotepad('${this.id}')" class="btn btn-danger"
                title="Delete your note forever & ever.."><i class="mdi mdi-skull-scan"></i></button>
        </div>
        <div class="col-12 col-md-9 d-flex justify-content-center">
            <textarea name="activeNotepad" id="active-notepad-body" style="width: 100%;" cols="30" rows="25"
                maxlength="50000">${this.noteBody}</textarea>
        </div>
    </div>
</div>
        `
    }

    // NOTE building note count
    // get currentNoteCount() {
    //     return `
    //     <p>${this.noteCount}</p>
    //     `
    // }

    get ShortDate() {
        return this.createdTime.toLocaleDateString()
    }

    get noteCounted() {
        return
    }

}