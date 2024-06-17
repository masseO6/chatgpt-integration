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
Dopo esser riusciti a far funzionare l'estensione di chat gpt su vs code permettendoci di farle richieste abbiamo implementato un ulteriore modulo che ci permettesse anche di far modificare all'ai un determinato testo selezionato per poi riscriverlo nel codice.
### 3. IL DEBUGGING
Non capendo subito perchè si presentasse questo errore ci siamo documentati per poi scoprire che sul packae.json l'indirizzo del file che conteneva la funzione era sbagliato e dopo averlo corretto il comando richiamava la funzione però non riusciva a connettersi ai server dell'ai perchè non avevamo ancora la api key per avere l'accesso ai server di chat gpt.
Il secondo grosso problema che abbiamo riscontrato riguardava il funzionamento dell'API key che non ci permetteva di connetterci ai server di open ai così abbiamo contattato l'assistenza per risolvere questo problema e abbiamo scoperto che le api key sono tutte a pagamento.
quindi al posto di continuare a sviluppare il modulo abbiamo iniziato a studiare altre alternative visto ch in ogni caso avremmo dovuto comprare un piano di abbonamento.
### 4. LE POSSIBILITÀ
abbiamo iniziato con amazon Q, ma non eravamo soddisfatti della precisione delle risposte, così abbiamo iniziato ad usare la chat già integrata in vs codo di copilot che sembra essere un ottimo prodotto.
Entrambe le ai sembrano fare quello che gli chiediamo la principale differenza sembra essere nel linguaggio infatti copilot usa jest invece chat gpt usa mocha solitamente però si può chiedere anche a copilot di usare lo stesso linguaggio e lo può fare senza problemi.
Inoltre chat gpt tende ad eseguire più test facendo quindi codici più lunghi, un altra differenza è che i codici di chat gpt sono più commentati ci sono parti dove spiega quello che fa il codice. copilot è meno commentato ma essendo integrato nel programma riesce a leggere la struttura della cartella del software e anche i collegamenti tra i file non necessitano di ritocchi cosa che ovviamente chat gpt non può fare.
ovviamente una piccola revisione è necessaria in entrambi i casi per verificare la presenza di eventuali errori
## IL RISULTATO