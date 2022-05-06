# Instruktioner

Först och främst behöver du göra en clone till my REST Api och här är länken https://github.com/AlqanbarRami/RenoApi.git .<br>
Api fungerar på port 5001. Så du behöver vara säker på att porten är tillgänglig på din dator annars kan du använda en annan port.<br>
Men tänk på att redigera Api.js som finns i en mapp som heter Services på React applikationen.<br>
Öppna React appen och skriv npm install i Terminal för att installera node_modules. Skriv npm start för att bygga med parcel.<br>
Tryck på App som finns på sidan för att öppna uppgift 3.<br>
Det finns en mapp som heter V1 som innehåller filer för uppgift 1. Du behöver inte läsa det som finns i mappen.<br> 

## För att testa kraven : 

#### Krav nummer 5
Jag vet inte om det var rätt eller fel men jag har testat den i min dator och den fungerar utmärkt.<br>
Du kan testa git reflog för att visa alla commit info både meddelande och Id.<br>

Git revert 2d849ed : här har jag inte Axios men Components och sessionstorage fungerar utmärkt.<br>
Git revert b535636 : här har jag installerat axios men inte helmet<br>
Git revert 0d4ac71: här har jag installerat och använt Helmet.<br>

#### Krav nummer 6
Det finns totalt just nu ungefär 21 Components.<br>
Components/Construction -> 5 components<br>
Components/Customer -> 5 components<br>
Components/Supplier -> 5 components<br>
Components/General -> 6 components<br>

#### Krav nummer 7, 8, 9, 10
-Har installerat Axios och det finns i Services/Api.js<br>
##### Anropar:<br>
Components/Construction/construction-add-post.js : Skicka information till Api<br>
Components/Construction/construction-posts.js : Hämta information från Api<br>
Components/Customers/customer-add-post.js : Skicka information till Api<br>
Components/Customers/customers-posts.js : Hämta information från Api<br>
Components/Supplier/supplier-add-post.js : Skicka information till Api<br>
Components/Supplier/supplier-posts.js : Hämta information från Api<br>

-Har också installerat Helmet och det finns nästan överallt för att skriva page titles.<br>

#### Krav nummer 11
Har Services/Api

#### Krav nummer 12
Jag har använt Session storage<br>
-Spara information<br>
Components/Construction/construction.js<br>
Components/Customer/customer.js<br>
Components/Supplier/suppiler.js<br>
-Spara och hämta information<br>
Components/General/login.js<br>
Hämta bara information<br>
Components/General/header.js<br>

#### Krav nummer 13
Components/Construction/construction-add-post.js<br>
Components/Customer/customer-add-post.js<br>
Components/Supplier/supplier-add-post.js<br>

#### Krav nummer 14
Components/Customer/customer.js<br>
Components/Customer/customerpage.js<br>
Components/Construction/construction.Js<br>
Components/Construction/constructionpage.js<br>
Components/Supplier/supplier.js<br>
Components/Supplier/supplierpage.js<br>
Components/General/header.js<br>
Components/General/main.js<br>



# Externa bibliotek
Jag har använt axios för att jobba med externa Api.<br>
Jag har även använt helmet för att ge titles för sidorna. Helmet är också ett bra verktyg för SEO.<br>

# Tjänster
Jag har skrivit en egen Api. Jag var tvungen att göra så för att mitt projekt beror på den.<br>
Annars kommer det vara svårt att jobba vidare med min idé.<br>
Jag har även byggt login och register som jag kommer att använda på nästa version.<br>

-Har installerat Axios och det finns i Services/Api.js<br>
anropar:<br>
Components/Construction/construction-add-post.js : Skicka information till Api<br>
Components/Construction/construction-posts.js : Hämta information från Api<br>
Components/Customers/customer-add-post.js : skicka information till Api<br>
Components/Customers/customers-posts.js : Hämta information från Api<br>
Components/Supplier/supplier-add-post.js : skicka information till Api<br>
Components/Supplier/supplier-posts.js : Hämta information från Api<br>
