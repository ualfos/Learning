import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean= true;
    _listFilter: string;
    
    get listFilter():string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts= this.listFilter ? this.perfomFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[]= [];
      
    constructor(private productService: ProductService){

    }
    perfomFilter(filterBy:string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=> 
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts= this.products;
    }
}
