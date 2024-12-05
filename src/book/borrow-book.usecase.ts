
import { Book } from './book';
import { BorrowBookResponse } from './borrow-book-response';

export class BorrowBookUseCase {
  execute(book: Book): BorrowBookResponse {
    if (book.isBorrowed) {
      return new BorrowBookResponse(null, 'Le livre que vous essayez de prendre est déjà emprunté.');
    }
    book.isBorrowed = true;
    return new BorrowBookResponse(book.title, `Le livre ${book.title} à bien été emprunté.`);
  }
}
