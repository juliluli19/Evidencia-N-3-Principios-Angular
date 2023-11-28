import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { RecuperarComponent } from '../recuperar/recuperar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RegisterComponent, RecuperarComponent, HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(
    public route: Router
  ){
    this.loginForm = new FormGroup({
      correoUsuario: new FormControl('', [Validators.required, Validators.email]),
      contrasenaUsuario: new FormControl('', Validators.required)
    });
  };
  
  verificarDatos(){
    
    const correoValor = this.loginForm.get('correoUsuario')!.value;
    const contrasenaValor = this.loginForm.get('contrasenaUsuario')!.value;


    const usuarioDatos = localStorage.getItem('usuario')

    if(usuarioDatos){
      const datos = JSON.parse(usuarioDatos);

      if(correoValor === datos.correo && contrasenaValor === datos.contrasena){
        this.route.navigateByUrl('home')
      }else{
        alert("Datos erroneos")
      }
    }
  }

  saludar(){

    localStorage.setItem('saludo', "Bienvenido")
  }

  
  navegar(){
    this.route.navigateByUrl('register')
  }
  recuperarC(){
    this.route.navigateByUrl('recuperar')
  }
}
