import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Endpoint } from 'src/app/core/shared/endPoint';
import { IApiResponse, IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooksBySubject(subjectName: string) {
    return this.http
      .get<IApiResponse<IBook[]>>(
        `${Endpoint.BOOK_LIBRARY.get_by_subjects(subjectName)}`
      )
      .pipe(map((response) => response.works.slice(0, 9)));
  }

  getBookDetailsById(workId: string) {
    return this.http
      .get<IBook>(`${Endpoint.BOOK_LIBRARY.get_book_detail(workId)}`)
      .pipe(map((response) => response));
  }
}
