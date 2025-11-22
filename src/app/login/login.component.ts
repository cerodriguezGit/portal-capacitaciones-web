import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  error: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  login(f: NgForm) {
    const userName = f.value.usuario;
    const password = f.value.password;

    this.loginService.login(userName, password).subscribe(
      () => {
        this.router.navigate(['/inicio']);
      },
      error => {
        this.error = error;
        alert(this.error);
      }
    );
  }
}
