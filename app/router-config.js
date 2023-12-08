import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { NotepadController } from "./controllers/NotepadController.js";
import { Router } from "./utils/Router.js";



export const router = new Router([
  {
    path: '',
    controllers: [NotepadController],
    view: `app/views/NotepadView.html`
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])