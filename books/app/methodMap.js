function booksOff(elements) {
  const discount = 0.10
  booksOff = elements.map(book => {
    return {
      ...book, 
      preco: book.preco - (book.preco*discount)
    }        
  })
  return booksOff
}