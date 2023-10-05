# Calcolo del prezzo del biglietto del treno

- inizializzare una variabile prezzoKm con il valore di 0.21
- inizializziamo una variable con lo sconto under18
- inizializziamo una variable con lo sconto over65
- inizializziamo una variable per l'elemento input del DOM
- inizializziamo una variable per l'elemento select del DOM
- inizializziamo una variable per l'elemento prezzo-finale del DOM
- inizializziamo una variable per l'elemento button del DOM

- Chiedere al passeggero il numero di km che vuole percorrere

  - inserire il valore in un input

- Chiedere al passeggero la sua età

  - selezionare il valore con un select

- calcolare il prezzo base del biglietto

  - inizializzare una variabile prezzoBase con totaleKm \* prezzoKm

- applicare eventuale sconto

  - inizializziamo un variabile sconto con valore di base 0

  - SE il passeggero ha meno di 18 anni applichiamo uno sconto del 20%

  - ALTRIMENTI SE il passeggero ha più di 65 anni applichiamo uno sconto del 40%

- inizializzare una variabile prezzoFinale uguale a prezzoBase - sconto

- stampare il costo del prezzo finale del biglietto

  - troviamo nel DOM l'elemento con id="prezzo-finale" e salviamolo in una variabile

  - modifichiamo il contenuto cliccano sul bottoneS
