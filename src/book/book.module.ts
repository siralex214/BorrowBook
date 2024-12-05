import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BorrowBookUseCase } from './borrow-book.usecase';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BorrowBookUseCase],
})
export class BookModule {}
