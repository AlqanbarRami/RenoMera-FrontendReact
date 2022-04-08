import {Page} from './page.js';

export class Contact extends Page {
    constructor() {
        super('Contact');
    }
    
  
    createElement() {
        super.createElement();
        
    }

    getElementString() { 
        return `
        <div class="contact">
        <div><strong>Email : </strong> <span>Rami.alqanbar@gmail.com<span> </div>
        <div> <strong>Phone : </strong> <span>0739888159<span> </div>
        </div>
        `;
        
    }


}