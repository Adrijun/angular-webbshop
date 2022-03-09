import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = []
  constructor(private item: ProductsService) { }

  ngOnInit(): void {
    this.item.getMovies().subscribe((result: Movie[]) => {
      console.log(result);
      this.movies = result
    });

  }

}
