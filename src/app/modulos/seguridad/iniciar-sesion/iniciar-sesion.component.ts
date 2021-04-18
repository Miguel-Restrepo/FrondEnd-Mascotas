import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  fgValidation: FormGroup= this.fb.group({});
  constructor(private fb: FormBuilder) { 

  }
  construirFormulario(){
    this.fgValidation=  this.fb.group({
      correo:['', Validators.required],
      clave:['', Validators.required]

    })

  }
  ngOnInit(): void {
    this.construirFormulario()

  }
get obtenerFgV(){
  return this.fgValidation.controls;
}
}
