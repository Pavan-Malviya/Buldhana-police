import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;

  constructor(private router: Router) { }

  submit() {
    this.router.navigate(['/dashboard'], );
  }
  clear(){
    this.username ="";
    this.password = "";
    this.show = true;
  }
}
