// Seleziono container con Query selection
const rawElement = document.querySelector('.raw')
// Creazione ciclo for

// "Dichiaro" x è uguale a 0, "Condizione" x deve essere minore di 100, "Incremento" di 1 ad ogni Loop
for (let x = 0; x < 100; x++) {

    // Utilizzo create.element per creare un div
    const divElement = document.createElement('div')
    // Inserisco classe cels
    divElement.classList.add('cels')

    // SE x + 1 è multiplo di 3 e 5 
    if (((x + 1) % 15) === 0) {
        // Utilizzo appen per inserire il testo FizzBuzz 
        divElement.append('FizzBuzz')
        // Utilizzo classList.add per aggiungere la classe fizzbuzz
        divElement.classList.add('fizzbuzz')
        // Stampa 'FizzBuzz'
        console.log('FizzBuzz')

    // ALTRIMENTI SE x + 1 è un multiplo di 5
    } else if (((x + 1) % 5) === 0) {
        // Utilizzo appen per inserire il testo Buzz
        divElement.append('Buzz')
        // Utilizzo classList.add per aggiungere la classe buzz
        divElement.classList.add('buzz')
        // Stampa 'Buzz'
        console.log('Buzz')

    // ALTRIMENTI SE x + 1 è multiplo di 3
    } else if (((x + 1) % 3) === 0) {
        // Utilizzo appen per inserire il testo Fizz
        divElement.append('Fizz')
        // Utilizzo classList.add per aggiungere la classe fizz
        divElement.classList.add('fizz')
        // Stampa 'Fizz'
        console.log('Fizz')

    // ALTRIMENTI
    } else {
        // Utilizzo appen per inserire il valore di x
        divElement.append(x + 1)
        // Stampa x + 1
        console.log(x + 1)
    }

    rawElement.append(divElement)
}