# IL MIO PROGETTO
## L'OBBIETTIVO
L'idea del progetto era di creare un modulo per Vs code che potesse implementare l'ai sul programma tramite un estensione inizialmente solo come supporto esterno al codice per poi permettergli di modificarlo direttamente correggendolo e migliorandolo.
L'obbiettivo era quello di automatizzare alcune procedure molto macchinose e complicate che allungano solamente i tempi necessari per completare i progetti, come il controllo dei codici dopo l'aggiornamento dei software.
## IL PROCESSO PRDUTTIVO
### 1. LA PREPARAZIONE
Prima di poter iniziare a programmare avevamo bisogno dei software che ci avrebbero letto i nosti codici così per iniziare abbiamo scaricato Visual code studio, git bash e nodejs; il primo il software dove avremmo scritto il nostro programma il secondo per installare le dipendenze necessarie al codice e il terzo anch'esso per far si che tutte le parti in typescript del codice funzionasse.
Ora rimaneva solo da capire come la nostra funzione avrebbe funzionato e per capirlo abbiamo chiesto all'ai come fare, ci ha consigliato di usare yeoman uno scaffolding tool che ci avrebbe permesso di creare la struttura base della nostra funzione.
### 2. LA SCRITTURA
Dopo aver installato tutto il necessario abbiamo chiesto a yeoman di creare il codice base per il nostro modulo a cui siamo andati a modificare il package.json per poi installare tutte le dipendenze necessarie al'estensione e aggiungere il comando di attivazione della funzione; il secondo file da modificare era l'extencion.ts dove abbiamo scritto quello che la funzione doveva fare .
Fatto questo non ci rimaneva che installare tutte le dipendenze tramite il comando *npm install* e poi compilare il codice tramite il comando *npm run compile*.
Così aprendo una nuova finestra siamo riusciti ad attivare una scermata di Vs code con l'estensione ma schiacciando il comando risultava non collegato alla funzione.
### 3. IL DEBUGGING
Non capendo subito perchè si presentasse questo errore ci siamo documentati per poi scoprire che sul packae.json l'indirizzo del file che conteneva la funzione era sbagliato e dopo averlo corretto il comando richiamava la funzione però non riusciva a connettersi ai server dell'ai perchè non avevamo ancora la api key per avere l'accesso ai server di chat gpt 