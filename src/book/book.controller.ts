
import { Controller, Post, Body, NotFoundException, Get } from '@nestjs/common';
import { BorrowBookUseCase } from './borrow-book.usecase';
import { BorrowBookResponse } from './borrow-book-response';
import { Database } from './database';

@Controller('borrow')
export class BookController {
  constructor(private readonly borrowBookUseCase: BorrowBookUseCase) {}

  @Post()
  borrowBook(@Body('bookId') bookId: string): BorrowBookResponse {
    const book = Database.findBookById(bookId);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return this.borrowBookUseCase.execute(book);
  }
}
