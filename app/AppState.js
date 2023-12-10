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
      editedTime: '12/8/2023',
    }),

    new Notepad({
      noteName: 'Lets see how this looks',
      noteBody: 'I need to display this out so I have a better understanding of what is going on',
      editedTime: '12/8/2023',
    })
  ]

  /**@type {Notepad} */
  activeNotepad = null


















}

export const AppState = createObservableProxy(new ObservableAppState())