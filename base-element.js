import './node_modules/jquery/dist/jquery.js';


export class BaseElement {
    
    constructor() {
        this.element = null;  
        this.header = document.getElementById("header");
        this.main = document.getElementById("main");
        this.footer = document.getElementById("footer");
    }
    
    appendToElement(el) {
        this.createElement();
        switch(el){
            case 'header':
                this.header.innerHTML = this.element;
                break;
            case 'main':
                this.main.innerHTML =  this.element;
                break;
            case 'footer':
                this.footer.innerHTML = this.element;
                break;
            default:
                console.log("Error");              
                    
        }
    }
    
    createElement() {
        let s = this.getElementString();
        this.element = s;
    }
    
    getElementString() {
        throw 'Please override getElementString() in BaseElement';
    }
    

}