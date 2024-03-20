import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IBook } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'bl-book-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent{
fallBackImage = '/assets/images/fallback_image.png'
@Input() showFavorite!: boolean;
@Input({required: true}) book!: IBook;

constructor(private router: Router) {}

get contructImageUrl() {
  if(this.book.cover_id) {
    return `https://covers.openlibrary.org/b/id/${this.book.cover_id}-S.jpg`

  }
  return this.fallBackImage;
}

get constructAuthorInfo() {
  return this.book.authors.map(a => a.name).join(', ')
}

navigateToBookDetail(book: IBook) {
  this.router.navigate(['/home/book', book.key], {state: {data:{ ...book}}});
}
}
