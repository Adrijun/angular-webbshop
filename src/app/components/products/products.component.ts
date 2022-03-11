import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  movies: Movie[] = [];
  movie!: Movie
  constructor(private item: ProductsService,
    private cartService: CartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.item.getMovies().subscribe((result: Movie[]) => {
      console.log(result);
      this.movies = result
    });
  }
  addToCart(movie: Movie) {
    this.cartService.addToCart(movie);
    console.log(movie.name);
  }
}
