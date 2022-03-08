import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  movies: any;
  constructor(private service: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {

    this.service.getMovies().subscribe((result) => {
      console.log(result);
      this.movies = result
    });
  }

  // // saveToCart(movie: any) {
  // //   console.log(movie.id);
  // //   localStorage.setItem('id', movie.id)


  // }
  addToCart() {
    this.cartService.addToCart(this.movies);

  }
}
