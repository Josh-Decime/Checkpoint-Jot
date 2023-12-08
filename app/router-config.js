import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { NotepadController } from "./controllers/NotepadController.js";
import { Router } from "./utils/Router.js";



export const router = new Router([
  {
    path: '',
    controllers: [NotepadController],
    view: /*html*/`
    <section class="container-fluid">
      <section class="row">
        <section class="col-4 bg-primary sidebar-height">
          <h3 class="text-center"  >Notepad</h3>
          <div class="" id="notepad-list">
          </div>
        </section>
        <section class="col-8">
        </section>
      </section>
    </section>
    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])