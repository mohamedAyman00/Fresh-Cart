import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private _EcomdataService: EcomdataService, private _CartService: CartService, private _ToastrService: ToastrService) { }

  catogories: any[] = [];


  products: any[] = [];

  searchTerm: string = '';


  addCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message, 'Fresh Cart');

      },
      error: (err) => {
        console.log(err);

      }
    });
  }
  categoriesSliderOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  };


  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    items: 1,
    nav: false
  };

  ngOnInit(): void {

    //get all products
    this._EcomdataService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response.data;

      },
    });

    //get categories
    this._EcomdataService.getCategories().subscribe({
      next: (response) => {
        this.catogories = response.data;


      },
    });
  }
}
