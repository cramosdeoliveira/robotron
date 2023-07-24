const elementToInsertBooks = document.getElementById('livros')

function booksView(elements) {
  elementToInsertBooks.innerHTML = ''
  elementAllValuesAvailables.innerHTML = ''
  
  elements.forEach(book => {
    // Example by function
    // let available = bookAvailable(book)
    elementToInsertBooks.innerHTML += `
      <div class="livro">
      <img class="${book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'}" src="${book.imagem}" />
      <h2 class="livro__titulo">${book.titulo}</h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>      
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>
    `    
  });
}


// Example by function

// function bookAvailable(book) {
//   if (book.quantidade > 0) {
//     return 'livro__imagens'
//   } else {
//     return 'livro__imagens indisponivel'
//   }
// }

