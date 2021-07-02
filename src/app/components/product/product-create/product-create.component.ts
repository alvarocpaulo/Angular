import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.productService.showMessage('Produto cadastrado')
  }

  cancel(): void{
    this.productService.showMessage('Ação cancelada pelo usuário. Produto não cadastrado')
    this.router.navigate(['/products'])
  }

}
