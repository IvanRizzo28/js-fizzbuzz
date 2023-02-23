Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

Logica:
- All'interno del for (100 giri) si controlla, attraverso con il modulo (%), se ogni numero è un multiplo di 3 o di 5. Nel primo caso al posto di 3 scriviamo in output Fizz, nel secondo scriviamo in output Buzz. Ma se il numero è sia multiplo di 3 che di 5 allora scrivo in output FizzBuzz.
- si potrebbe fare un if con l'AND ($$). In questo caso preferisco fare soltato due if, che controllano se un numero e multiplo di 3 o di 5. Creo una variabile che viene inizializzata, all'interno del for, con il contatore del for, quando entra in un if sovrascrivo la variabile con il risultato che mi aspetto in output. Però se entra nell'if del 5, concateno la variabile con la scritta Buzz ma se sono già entrato nel primo if la variabile prima di entrare nel secondo if avrà già la scritta Fizz.