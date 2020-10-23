import {Injectable} from '@angular/core';
import {IProduct} from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    getProducts(): IProduct[]{
        return [ 
          {
            "productId": 1,
            "productName": "Surubelnita electrica, Panzer",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 120,
            "starRating": 3.2,
            "imageUrl": "assets/images/surubelnita_electrica_Panzer.jpg"
          },
              {
                "productId": 2,
                "productName": "Masina de insurubat cu impact, Panzer",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2019",
                "description": "15 gallon capacity rolling garden cart",
                "price": 420,
                "starRating": 4.2,
                "imageUrl": "assets/images/masina_de_insurubat_cu_impact_panzer.jpg"
              },
              {
                "productId": 5,
                "productName": "Masina de insurubat cu impact, Makita",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2019",
                "description": "Curved claw steel hammer",
                "price": 399,
                "starRating": 4.8,
                "imageUrl": "assets/images/masina_de_insurubat_cu_impact_Makita.jpg"
              },
              {
                "productId": 8,
                "productName": "Surubelnita cu acumulator, Bosch",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2019",
                "description": "15-inch steel blade hand saw",
                "price": 209,
                "starRating": 3.7,
                "imageUrl": "assets/images/surubelnita_cu_acumulator_bosch.jpg"
              },
              {
                "productId": 10,
                "productName": "Masina de insurubat, Hikoki",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2018",
                "description": "Standard two-button video game controller",
                "price": 2080,
                "starRating": 4.6,
                "imageUrl": "assets/images/masina_de_insurubat_cu_impact_hikoki.jpg"
              },
              {
                "productId": 3,
                "productName": "Masina de gaurit cu percutie, Panzer",
                "productCode": "GMG-5042",
                "releaseDate": "October 15, 2018",
                "description": "Standard two-button video game controller",
                "price": 105,
                "starRating": 4.0,
                "imageUrl": "assets/images/masina_de_gaurit-cu_percutie_panzer.jpg"
              },
              {
                "productId": 4,
                "productName": "Masina de gaurit cu percutie, Makita",
                "productCode": "GMG-5042",
                "releaseDate": "October 15, 2018",
                "description": "Standard two-button video game controller",
                "price": 311,
                "starRating": 4.0,
                "imageUrl": "assets/images/masina_de_gaurit-cu_percutie_makita.jpg"
              },
              {
                "productId": 6,
                "productName": "Masina de gaurit cu percutie, Bosh",
                "productCode": "GMG-5042",
                "releaseDate": "October 15, 2018",
                "description": "Standard two-button video game controller",
                "price": 575,
                "starRating": 4.0,
                "imageUrl": "assets/images/masina_de_gaurit-cu_percutie_bosh.jpg"
              },
              {
                "productId": 7,
                "productName": "Masina de gaurit cu coloana, Panzer",
                "productCode": "GMG-5042",
                "releaseDate": "October 15, 2018",
                "description": "Standard two-button video game controller",
                "price": 390,
                "starRating": 4.0,
                "imageUrl": "assets/images/masina_de_gaurit-cu_coloana_panzer.jpg"
              },
              {
                "productId": 9,
                "productName": "Masina de gaurit cu banc, Bosh",
                "productCode": "GMG-5042",
                "releaseDate": "October 15, 2018",
                "description": "Standard two-button video game controller",
                "price": 1280,
                "starRating": 4.0,
                "imageUrl": "assets/images/masina_de_gaurit-cu_banc_bosh.jpg"
              }

              
       
        ]
    }

}