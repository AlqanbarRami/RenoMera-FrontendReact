import { navBar } from './Header/nav-bar.js';
import {Footer} from './Footer/footer.js'
import './node_modules/jquery/dist/jquery.js';
import { Plan } from './Main/plan.js';
import { Contact } from './Main/contact.js';
import { Prototype } from './Main/prototype.js';




export class ApplicationBase {
    constructor(title){
        this.title = title;
        this.nav = new navBar();
        this.footer = new Footer();
        this.main = document.getElementById("main");
        this.routeMap = {};
        this.plan = new Plan();
        this.prototype = new Prototype();
        this.contact = new Contact();
    }



    addRoute(id,obj, defaultRoute = false){
        this.nav.addLink(id, '');
        this.routeMap[id]= obj;

        if(defaultRoute){
            this.defaultRoute = id;
        }

    }
    show(something) {
        switch(something){
            case "plan":
                this.plan.appendToElement('main');
                break;
            case "proto":
                this.prototype.appendToElement('main');
                break;
            case "contact": 
                this.contact.appendToElement('main');
                break;
            default:
                console.log("Error");    

        }
       
    }

    AlwaysShow(){
        this.nav.appendToElement('header');
        this.footer.appendToElement('footer');
    }
}