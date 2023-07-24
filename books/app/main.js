let books = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBooksAPI()

async function getBooksAPI () {
  const res = await fetch(endpointAPI)  
  books = await res.json()  
  let booksDiscount = booksOff(books)
  booksView(booksDiscount);  
}

