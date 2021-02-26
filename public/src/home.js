// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  let finalArray = []
  // sort by most common genre, return top 5 and how many times
  let result = books.reduce((acc, book) => {
    // get the genre;
    const genre = book.genre;
    const genreCount = acc.hasOwnProperty(genre) ? acc[genre] : 0;

    acc[genre] = genreCount+1;

    return acc;
  }, {});
  console.log(result);
  for (let genre in result) {
    const name = genre;
    const count = result[name];
    finalArray.push({name, count});
  }

  let sorted = finalArray.sort((a, b) => {
    const countA = a.count;
    const countB = b.count;
    return countB - countA;
  })

 return sorted.slice(0, 5);
}

function getMostPopularBooks(books) {
  let finalArray = [];
  // sort by most common book, return top 5 and how many times
  let result = books.reduce((acc, book) => {
    
    const title = book.title;
    const borrowsCount = book.borrows.length;

    acc[title] = borrowsCount;

    return acc;
  }, {});

   for (let title in result) {
    const name = title;
    const count = result[name];
    finalArray.push({name, count});
  }


  let sorted = finalArray.sort((a, b) => {
    const countA = a.count;
    const countB = b.count;
    return countB - countA;
  })

 return sorted.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  // determine borrow count by author id since we already have that available in the book object
  const counts = books.reduce((acc, book) => {
    const authorId = book.authorId;
    const currentCount = acc.hasOwnProperty(authorId) 
                       ? acc[authorId] : 0;
    acc[authorId] = currentCount + book.borrows.length;
    return acc;
  }, {});
console.log(counts);

  // sort and slice the result of above
  const sorted = getSorted(counts);
  
  

  // normalize the authors array to prevent looping for every author find, this way we just grab the name of the author by their id when looping over our sorted result above
  const normalizedAuthors = authors
    .reduce((acc, author) => {
      acc[author.id] = `${author.name.first} ${author.name.last}`;
      return acc;
    }, {})

  // loop over our sorted result and populate with author name instead of id, basically create the array of objects and populate with the necessary info
  return sorted.map(author => {
    return {
      name: normalizedAuthors[author[0]],
      count: author[1]
    }
  })
}

function getSorted(counts){
 return Object.entries(counts)
    .sort(([,a],[,b]) => b-a)
     .slice(0,5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
