import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';  // Import ReactiveFormsModule

import { Router } from '@angular/router';

import { RecuperarComponent } from '../recuperar/recuperar.component';
import { HomeComponent } from '../home/home.component'


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RegisterComponent, RecuperarComponent, HomeComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  form: FormGroup;
  
  constructor(
    public route: Router
  ){
    this.form = new FormGroup({
      nombre: new FormControl(''),
      celular: new FormControl(''),
      direccion: new FormControl(''),
      correo: new FormControl(''),
      contrasena: new FormControl('')
    });
  }

  enviar(){
    
    const formValues = this.form.value;

    localStorage.setItem('usuario', JSON.stringify(formValues));

    alert("Los datos se guardaron correctamente" )

    this.route.navigateByUrl('home')

  }
  

}