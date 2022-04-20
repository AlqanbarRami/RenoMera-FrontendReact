import {Page} from './page.js';

export class Prototype extends Page {
    constructor() {
        super('Prototyp');
    }
    
  
    createElement() {
        super.createElement();
        
    }

    getElementString() { 
        return `
        <div class="proto"><strong>Prototyp</strong>
        </br>
        Mitt projekt kommer att servera tre olika typer av användare dessa är privatpersoner, byggföretag och materialleverantör. Det kommer att hjälpa privatpersoner till att hitta ett passande företag när det händer något problem i huset som behöver fixas. Till exempel målning, el, montör, underhåll och m.m. Privatpersoner kommer att annonsera gratis i vår applikationen och beskriva problemet. Byggföretagen kommer att kontakta privatpersoner direkt och skicka en offert. Byggföretagen kan också annonser om deras behov av material. Materialleverantör kommer att annonsera om deras varor och deras erbjudanden. Både privatpersoner och byggföretagen kan kolla på material och får köpa. Materialleverantör kan inte se privatpersoners annonser och det finns även ingen  möjlighet till att se andra privatpersoner annonser. Byggföretagen kan både se materialleverantörs- och privatpersoners annonser. 
        </br></br>
        När det gäller att tjäna pengar finns det engångs startavgift för att öppna ett baskonto på 25 kronor för byggföretag och 35 kronor för materialleverantörer.
        </br></br>
        Det finns också en annan typ av konto som kallas för pro. Byggföretag kan se alla annonser för privat personer i samma stad och inte i hela landet. De kan se materialleverantörer annonser i samma län. Med pro kan de se alla annonser i hela landet. Det kan även få en direkt notifiering när det finns en ny annons som passar företagets arbete.
        </br></br>
        Materialleverantör kan se alla annonser från byggföretagen i samma län och deras annonser kommer att visas till alla byggföretag i samma län. Med pro konto kan de nå hela landet och få notifieringar.  
        </br></br>
        Prototyp kommer att vara inriktad mot min idé. Man kan välja att skapa ett konto beroende på typ av användare. Logga ut, logga in, lägg en ny annons och mina sidor där man kan redigera och radera. Visa annonser beroende på typ av konto eller stad.
        </div>
        `;
        
    }


}