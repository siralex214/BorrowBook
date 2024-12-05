
import { Book } from './book';

export class Database {
  private static books: Book[] = [
    new Book('1', '1984', false),
    new Book('2', 'Brave New World', false),
    new Book('3', 'Fahrenheit 451', true),
  ];

  static findBookById(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }
}
