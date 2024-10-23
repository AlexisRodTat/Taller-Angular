import { Component, NgModule } from '@angular/core';
import { CardComponent } from "../../component/card/card.component";
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  email:string = '';
  password:string = '';

  
  login(user: string, password: string){
      //user es un usuario, correo, etc
      //1 = 1 true
      // SELECT user, password FROM user WHERE user = @user & password = @password
      //if (user == '1 = 1' || password == '1 = 1'){
        //aplicar logica
        //return false;
      //}

      //llamar la API
      console.log(`User: ${user}, Password: ${password}`);
  }

}
