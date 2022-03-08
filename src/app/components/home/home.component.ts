import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getMovies().subscribe((result) => {
      console.log(result);
      this.movies = result
    });
  }

}
