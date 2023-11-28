import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RegisterComponent],
  templateUrl: './recuperar.component.html',
  styleUrl: './recuperar.component.css'
})
export class RecuperarComponent {
  
  recuperarForm: FormGroup;

  constructor(){
    this.recuperarForm = new FormGroup({
      nombre: new FormControl(''),
      correo: new FormControl(''),
      contrasena: new FormControl('')

    });
  }
  
  recuperarContrasena(){

  }

  guardarCN(){

    const nombre = this.recuperarForm.get('nombre')!.value
    const correo = this.recuperarForm.get('correo')!.value
    const contranueva = this.recuperarForm.get('contrasena')!.value

    const elementData: any = localStorage.getItem('usuario')

    const usuariodatos  = JSON.parse(elementData);

    if(nombre==usuariodatos['nombre'] && correo==usuariodatos['correo'] ){
      usuariodatos.contrasena = contranueva
      localStorage.setItem("usuario", JSON.stringify(usuariodatos))
      alert("Se Cambio la Contraseña Correctamente")
    }else{
      alert("hola22")
    }

  }
}
