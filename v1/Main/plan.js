import {Page} from './page.js';


export class Plan extends Page {
    constructor() {
        super('Affärsplan');
    }
    
  
    createElement() {
        super.createElement();
        
    }

    getElementString() { 
        return `
        <div class="plan">
        
        <h3>RenoMera</h3>
        </br>
        RenoMera är en applikation som samlar privatpersoner, byggföretag och
        materialleverantörer tillsammans med en direkt kontaktpunkt. När jag skriver en applikation
        så betyder det inte att det kommer bara vara en Mobilapplikation utan även en
        Webbapplikation.</br></br>

        Syftet med projektet att bekämpa arbetslösheten som har ökat de senaste åren. Samt att
        tillhandahålla en säker plats för privatpersoner och undvika liknande tjänster som börjar
        sakna trovärdighet. Även ge en möjlighet för alla företag att växa.
        </br></br>
        Målet är att nå till 20 000 företag och minst 200 000 privatpersoner år 2023 genom att
        bygga upp en applikation inom fyra och en halv månad.
        </br></br>
        Med hjälp av WBS har jag fastställt fem grundläggande etapper för att bygga projektet med
        en början av att etablera organisation till att lansera och marknadsföra. Beroende av WBS
        har jag använt Ganttschema som visade att vi behöver minst 8 månader från April Till
        December för att lansera projektet.
        </br></br>
        Nulägesanalys med hjälp av SWOT metod har visat att det finns stora möjligheter till att
        projektet lyckas. Jag har också identifierat och analyserat risker. Trots att jag har erfarenhet
        av e-marknadsföring har jag också identifierat marknadsföring som en risk som kan påverka
        projektet. Marknadsföring är det viktigaste steget för att lyckas med projektet och jag gjorde
        det bara för att göra extra fokus på den här punkten.
        </br></br>
        Resurser som projektet behöver är bara två i början, som kommer att ta olika roller och de
        kommer vara kärnintressenter. Efter lanseringen av projektet kommer det att finnas
        ytterligare en anställd för att ta hand om ytterligare detaljer. Det betyder att
        kommunikationsplanen inte kommer att förlita sig alltför mycket på rapporter eftersom
        organisationen kommer att vara liten i början.
        </br></br>

        Nyttorna med projektet är mycket stora för privatpersoner, företag och samhället. Sätten att
        tjäna pengar på är flera, allt på en budget som inte överstiger 750 tusen kronor</div>
        `;
        
    }


}