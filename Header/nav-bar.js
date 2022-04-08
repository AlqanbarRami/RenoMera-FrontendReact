import { BaseElement } from '../base-element.js';

export class navBar extends BaseElement {

    constructor() {
        super();
        this.links = [];
        
    }

    addLink(title, href){
        this.links.push({
            title,
            href
        })
    }
    getElementString() { 
        let links ="";
        for ( let link of this.links){
            links += `<button id="${link.title}" href="${link.href}">${link.title}</button>`
        }
        return `
        <div class="topnav" id="myTopnav">
        ${links}
        </div>

        `;
        
    }
    
   

}