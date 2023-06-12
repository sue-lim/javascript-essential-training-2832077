class Book {
  constructor(
    // parameters:
    title,
    subject,
    author,
    pages,
    color,
    bookOpen,
    datePublished
  ) {
    // Define properties:
    this.title = title;
    this.subject = subject;
    this.author = author;
    this.pages = pages;
    this.color = color;
    this.bookOpen = bookOpen;
    this.datePublished = datePublished;
  }

  // Add methods like normal functions:
  toggleBook(bookStatus) {
    this.bookOpen = bookStatus;
  }

  bookAge() {
    let now = new Date();
    let published = new Date(this.datePublished);
    let elapsed = now - published;
    let daysSincePublished = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSincePublished;
  }
}
export default Book;
