import { AppState } from "../AppState.js";
import { generateId } from "../utils/GenerateId.js";





export class Notepad {
    // /** @param {}*/
    constructor(data) {
        this.id = generateId()
        this.noteName = data.noteName || null
        this.noteColor = data.noteColor
        this.noteBody = data.noteBody || ''
        this.editedTime = data.editedTime && new Date(data.editedTime) || new Date()
        // this seems like it should work, but the data is coming in the wrong format, which breaks all my javascript when it hits the first shortDate
        // this.createdTime = data.createdTime || new Date()
        this.createdTime = data.createdTime && new Date(data.createdTime) || new Date()
        console.log('new notepad 📓', this)

        // NOTE building note count
        // this breaks all of javascript lol
        // this.noteCount = AppState.noteCount
    }

    get notepadListItem() {
        return `
<div class="d-flex justify-content-between align-items-baseline my-2 px-2 bg-secondary">
    <span>${this.noteName}</span>
    <div>
        <span>${this.EditedShortDate}</span>
        <span>
            <button onclick="app.NotepadController.openNotepad('${this.id}')" style="color: ${this.noteColor}"
                class="btn" title="open Notepad"><i class="mdi mdi-notebook-edit"></i></button>
        </span>
    </div>
</div>
        `
    }

    get activeNotepadTemplate() {
        return `
<div class="container-fluid">
    <div class="row justify-content-center">
        <h1 class="fw-bold rounded text-center mx-2 mt-3" style="background-color: ${this.noteColor};">${this.noteName}
        </h1>
        <div class="d-flex justify-content-between mb-4">
            <span>Created On: ${this.LongDate}</span>
            <span>Last Save: ${this.EditedLongDate}</span>
        </div>
        <div class="col-12 col-md-9 d-flex justify-content-between mb-3">
            <button onclick="app.NotepadController.saveActiveNotepad()" class="btn btn-success"
                title="Yeah, good idea to save that!"><i class="mdi mdi-content-save">Save!</i></button>
            <button onclick="app.NotepadController.removeNotepad('${this.id}')" class="btn btn-danger"
                title="Delete your note forever & ever.."><i class="mdi mdi-skull-scan"></i></button>
        </div>
        <div class="col-12 col-md-9 d-flex justify-content-center mb-5">
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
        // console.log('🏁checking date:🏁', this.createdTime)
        return this.createdTime.toLocaleDateString()
    }

    get LongDate() {
        // console.log('🏁checking date:🏁', this.createdTime)
        return this.createdTime.toLocaleDateString('en-US', {
            month: 'long',
            weekday: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        })

    }

    get EditedShortDate() {
        return this.editedTime.toLocaleDateString()
    }

    get EditedLongDate() {
        return this.editedTime.toLocaleDateString('en-US', {
            month: 'long',
            weekday: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        })
    }



    // returns 2 because thats what is in the array starting
    // get noteCounted() {
    //     return AppState.noteCount
    // }


    // get noteCountedLoop() {
    //     return 
    // }

    // get countedNotes() {
    //     return AppState.loopFunction
    // }


}


