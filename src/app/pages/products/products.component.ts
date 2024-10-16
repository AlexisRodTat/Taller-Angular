import { Component } from '@angular/core';
import { Platillos } from '../../models/test';
import { CardComponent } from "../../component/card/card.component";


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  platillo: Platillos[] = [
    {
      name: 'Tacos',
      description: 'Unos tacos',
      price: 10,
      img: '/images/taco.jfif'
  },

  {
    name:'Tamales',
    description: 'Muy ricos',
    price: 15,
    img: '/images/tamal.jpg'
},

{
  name: 'Salbutes',
  description: 'Este si no se que sea',
  price: 10,
  img: '/images/salbute.jpg'
}
  ]
}
