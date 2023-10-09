// Funzione per navigare all'elemento successivo
function goToNext() {
    // Trova l'elemento corrente
    var currentDiv = document.querySelector('.video-container.active');

    // Trova l'elemento successivo
    var nextDiv = currentDiv.nextElementSibling;

    // Se esiste un elemento successivo, passa ad esso
    if (nextDiv) {
        currentDiv.classList.remove('active');
        nextDiv.classList.add('active');
    }
}

// Funzione per tornare all'elemento precedente
function goToPrevious() {
    // Trova l'elemento corrente
    var currentDiv = document.querySelector('.video-container.active');

    // Trova l'elemento precedente
    var previousDiv = currentDiv.previousElementSibling;

    // Se esiste un elemento precedente, torna ad esso
    if (previousDiv) {
        currentDiv.classList.remove('active');
        previousDiv.classList.add('active');
    }
}
