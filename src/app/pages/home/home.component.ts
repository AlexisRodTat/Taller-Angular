import { Component, NgModule } from '@angular/core';
import { CardComponent } from "../../component/card/card.component";
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { ReqresApiService } from '../../service/reqres-api.service';


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

  constructor(private apiReqres:ReqresApiService){}

  
  login(user: string, password: string){
      console.log(`User: ${user}, Password: ${password}`);

      this.apiReqres.login(user, password).subscribe(
        res => {
          alert('login succesfully: ' + res.token);
        }, 
        err => {
          alert(err.error.error);
        }
      )
  }

}
