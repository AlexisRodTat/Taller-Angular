import { Component } from '@angular/core';
import { Roles, Usuario } from '../../models/test';
import { CardComponent } from "../../component/card/card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  usuarios: Usuario[] = [{
    id: 1,
    name: "Alexis Rodriguez",
    description: "Es el patron",
    rol: { rol: "Admin" },
    img: '',
    price: ''
  }, 

  {
    id: 2,
    name: "Adrian Trujillo",
    description: "Simple cliente",
    rol: { rol: "Cliente" },
    img: '',
    price: ''
  }, 

  {
    id: 3,
    name: "Juancho",
    description: "Meserooo",
    rol: { rol: "Mesero" },
    img: '',
    price: ''
  }, 

  ]
}
