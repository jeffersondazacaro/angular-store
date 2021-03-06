import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ["id", "title", "price", "actions"];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fecthProducts();
  }

  fecthProducts() {
    this.productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      })
  }

  deleteProduct(id: string) {

    this.productService.deleteProduct(id)
      .subscribe(rta => {

        console.log(rta);
        this.fecthProducts();
      })
  }
}
