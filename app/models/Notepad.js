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
    <div class="d-flex justify-content-center m-3 bg-secondary">
        <span>${this.noteName}</span>
        <span>${this.editedTime}</span>
    </div>
        `
    }

}