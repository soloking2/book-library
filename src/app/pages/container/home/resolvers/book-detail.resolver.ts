import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EMPTY, catchError, map } from 'rxjs';
import { IBook } from 'src/app/pages/models/book.model';
import { BookService } from 'src/app/pages/services/book.service';

export const bookDetailResolver: ResolveFn<IBook> = (
  route,
  state,
  bookService = inject(BookService),
  router = inject(Router)
) => {
  const workId = <string>route.paramMap.get('workId');

  return bookService.getBookDetailsById(workId).pipe(
    map((response) => response),
    catchError((_error) => {
      router.navigate([router.url]);
      return EMPTY;
    })
  );
};
