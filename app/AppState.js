import { Notepad } from './models/Notepad.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []





  notePad = [
    new Notepad({
      noteName: 'Data is Connected',
      noteBody: 'The model is taking in new data from the AppState & is updating it in the console properly.',
      editedTime: '12/7/2023',
      createdTime: '12/3/2023'
    }),

    new Notepad({
      noteName: 'Lets see how this looks',
      noteBody: 'I need to display this out so I have a better understanding of what is going on',
      editedTime: '12/8/2023',
      createdTime: '12/5/2023',
    })
  ]

  noteCount = this.notePad.length


  //   let loopCount = 0

  // for (let i = 0; i <= Notepad.length; i++) {
  //   loopCount += 1
  // }

  // this.loopCount = 0;

  //   noteCountLoop() {
  //     for (let i = 0; i < Notepad.length; i++){
  //       this.loopCount += 1
  //     }
  //   }
  // why the heck cant i write a for loop inside here???

  loopFunction() {
    let loopAmount = 0

    for (let i = 0; i < this.notePad.length; i++) {
      loopAmount += 1
      console.log('➰Loop Count', loopAmount)
    }
    return loopAmount
    this.emit
  }



  /**@type {Notepad} */
  activeNotepad = null


















}

export class noteCounter {
  constructor() {
    this.loopCount = 0
  }

  noteCountLoop() {
    console.log('Before loop:', this.loopCount)
    for (let i = 0; i < Notepad.length; i++) {
      this.loopCount += 1
    }
    console.log('After loop:', this.loopCount)
  }
}


export const AppState = createObservableProxy(new ObservableAppState())

