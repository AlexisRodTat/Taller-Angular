import { Component, Input } from '@angular/core';
import { CardComponent } from "../../component/card/card.component";
import { AppComponent } from '../../app.component';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  
  acercaDe(){
    alert("Somos un restorann")
  }

  masInfo(){
    alert("Aqui ves los precios")
  }

  goProducts(){
    window.location.href='./products'
  }

}
