// Definisci una variabile globale per tenere traccia dell'indice della pagina corrente
var currentPageIndex = 0;

// Funzione per aggiornare il numero di pagina e mostrare/nascondere i div delle pagine
function updatePageCounter() {
    var pageCounter = document.getElementById('page-counter');
    var totalDivs = document.querySelectorAll('.video-container.active').length;
    
    // Aggiorna il testo del numero di pagina corrente
    pageCounter.textContent = (currentPageIndex + 1) + '/' + totalDivs;
    
    // Mostra solo il div con l'indice corrispondente
    var divs = document.querySelectorAll('.video-container');
    for (var i = 0; i < divs.length; i++) {
        if (i === currentPageIndex) {
            divs[i].classList.add('active');
        } else {
            divs[i].classList.remove('active');
        }
    }
}

// Funzione per navigare all'elemento successivo
function goToNext() {
    if (currentPageIndex < document.querySelectorAll('.video-container.active').length - 1) {
        currentPageIndex++;
    }
    updatePageCounter();
}

// Funzione per tornare all'elemento precedente
function goToPrevious() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
    }
    updatePageCounter();
}

// Chiamate iniziali per impostare il numero di pagina corrente
updatePageCounter();
