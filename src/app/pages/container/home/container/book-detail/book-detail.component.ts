import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Assets } from 'src/app/core/shared/assets';
import { IBook } from 'src/app/pages/models/book.model';

@Component({
  selector: 'bl-book-detail',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent implements OnInit {
  fallBackImage = Assets.IMAGES.FALLBACK_IMAGE;
  book!: IBook;
  routeData!: IBook;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.book = this.route.snapshot.data['book'];
    const { data } = window.history.state;
    this.routeData = data;
  }

  get contructImageUrl() {
    if (this.routeData.cover_id) {
      return `https://covers.openlibrary.org/b/id/${this.routeData.cover_id}-M.jpg`;
    }
    return this.fallBackImage;
  }

  get constructAuthorInfo() {
    return this.routeData.authors.map((a) => a.name).join(', ');
  }
}
