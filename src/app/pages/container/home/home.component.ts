import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable, finalize } from 'rxjs';
import { IBook } from '../../models/book.model';
import { BookItemComponent } from '../../components/book-item/book-item.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { EmptyState } from 'src/app/core/models/empty-state.model';
import { bookEmptyState } from './data/book-data';

@Component({
  selector: 'bl-home',
  standalone: true,
  imports: [SharedModule, BookItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  subject: string = 'finance';
  BOOKS$!: Observable<IBook[]>;
  emptyBookState = bookEmptyState;
  isLoading: boolean = false;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooksBySubject();
  }

  getBooksBySubject() {
    this.isLoading = true;
    this.BOOKS$ = this.bookService.getBooksBySubject(this.subject).pipe(finalize(() => {
      this.isLoading = false
    }));
  }
}
