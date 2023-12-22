  let currentPage = 1; // Pagina corrente
  const totalPages = 4; // Numero totale di pagine

  function goToDiv(page) {
    showPage(page); 
  }
  

function goToPrevious(page) {
  if (page > 1) {
    showPage(page - 1);
  }
}

function goToNext(page) {
  if (page < totalPages) {
    showPage(page + 1);
  }
}

// Mostra la prima pagina inizialmente
showPage(currentPage);
