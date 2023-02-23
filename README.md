Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

Logica:
- All'interno del for (100 giri) si controlla, attraverso con il modulo (%), se ogni numero è un multiplo di 3 o di 5. Nel primo caso al posto di 3 scriviamo in output Fizz, nel secondo scriviamo in output Buzz. Ma se il numero è sia multiplo di 3 che di 5 allora scrivo in output FizzBuzz.
- Faccio 3 if all'interno del for e controllo tutte e tre le condizioni e sovrascivo la variabile con il risultato atteso