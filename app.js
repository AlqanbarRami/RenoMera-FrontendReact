
import {Plan} from './Main/plan.js'
import {Prototype} from './Main/prototype.js'
import {Contact} from './Main/contact.js'
import { ApplicationBase } from './application-base.js';
import './node_modules/jquery/dist/jquery.js';



export class App extends ApplicationBase{
 constructor(){
     super("Uppgift 1");
     this.addRoute("Affärsplan", new Plan(),true);
     this.addRoute("Prototyp", new Prototype());
     this.addRoute("kontaktuppgifter", new Contact());

 }

}


export let application = new App();
application.AlwaysShow();

document.getElementById("Affärsplan").addEventListener("click", function(){
    application.show("plan");
})

document.getElementById("Prototyp").addEventListener("click", function(){
    application.show("proto");
})

document.getElementById("kontaktuppgifter").addEventListener("click", function(){
    application.show("contact");
})


