
import {Plan} from '../v1/Main/plan.js'
import {Prototype} from '../v1/Main/prototype.js'
import {Contact} from '../v1/Main/contact.js'
import { ApplicationBase } from './application-base.js';
import 'jquery';



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


