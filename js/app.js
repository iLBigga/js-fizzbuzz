// Creazione ciclo for

// "Dichiaro" x è uguale a 0, "Condizione" x deve essere minore di 100, "Incremento" di 1 ad ogni Loop
for (let x = 0; x < 100; x++) {

    // SE x + 1 è multiplo di 3 e 5 
    if (((x + 1) % 15) === 0) {
        // Stampa 'FizzBuzz'
        console.log('FizzBuzz')

    // ALTRIMENTI SE x + 1 è un multiplo di 5
    } else if (((x + 1) % 5) === 0) {
        // Stampa 'Buzz'
        console.log('Buzz')

    // ALTRIMENTI SE x + 1 è multiplo di 3
    } else if (((x + 1) % 3) === 0) {
        // Stampa 'Fizz'
        console.log('Fizz')

    // ALTRIMENTI
    } else {
        // Stampa x + 1
        console.log(x + 1)
    }
}