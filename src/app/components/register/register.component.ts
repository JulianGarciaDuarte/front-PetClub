import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  subformTitle='';
  subformSubTitle='';
  inputFields=[];
  n_pag=0;
  formFields = {
    firstForm: [
      {type: 'text', name: 'email', placeholder:'Correo'},
      {type: 'password', name: 'pass', placeholder:'Contraseña'},
      {type: 'password', name: 'cpass', placeholder:'Confirmar Contraseña'},
      {type: 'button', name: 'next', placeholder:'Continuar'}
    ],
    secondForm: [
      {type: 'text', name: 'name', placeholder:'Nombre'},
      {type: 'text', name: 'address', placeholder:'Direccion'},
      {type: 'text', name: 'phone', placeholder:'Telefono'},
      {type: 'button', name: 'next', placeholder:'Continuar'}
    ],
    thirdForm: [
      {type: 'text', name: 'petName', placeholder:'Nombre Mascota'},
      {type: 'text', name: 'petType', placeholder:'Tipo Mascota'},
      {type: 'text', name: 'age', placeholder:'Edad'},
      {type: 'text', name: 'breed', placeholder:'Raza'},
      {type: 'button', name: 'next', placeholder:'Registrarse'}
    ]
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  nextMenu(){
    this.n_pag = this.n_pag + 1;
    console.log(this.n_pag)
  }
  anteriorMenu(){
    this.n_pag = this.n_pag - 1;
  }
  sendToHome(){
    this.router.navigate(["/"]);
  }
}
