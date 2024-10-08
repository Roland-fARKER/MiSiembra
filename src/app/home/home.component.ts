import { Component } from '@angular/core';

interface cultivo {
  nombre: string;
  id: number;
}

interface area {
  tamaño: string;
  id: number;
}

interface departamento {
  id: number;
  nombre: string;
}

interface municipio {
  id: number;
  nombre: string;
}

interface densidad{
  id: number;
  nombre: string;
}

interface variedad {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  band: boolean = true;

  cultivoSeleccionado : cultivo | undefined;
  areaSelccionada : area | undefined;
  departamentoSeleccionado : departamento | undefined;
  municipioSeleccionado : municipio | undefined;
  densidadSeleccionada : densidad | undefined;
  variedadSeleccionada : variedad | undefined;
  
  cultivos : cultivo[] = [
    { id: 1, nombre: 'Frijol' },
    { id: 2, nombre: 'Maíz' }
  ];

  areas: area[] = [
    { id: 1, tamaño: '1 mz' },
    { id: 2, tamaño: '2 mz' },
    { id: 2, tamaño: '3 mz' },
  ]

  departamentos: departamento[] =[
    { id: 1, nombre: 'Masaya' },
  ]

  municipios: municipio[] =[
    { id: 1, nombre: 'Masaya' },
    { id: 2, nombre: 'Nindirí' },
    { id: 3, nombre: 'Masatepe' },
    { id: 4, nombre: 'Nandasmo' },
    { id: 5, nombre: 'Tisma' },
    { id: 6, nombre: 'Niquinohomo' },
    { id: 7, nombre: 'Catarina' },
    { id: 8, nombre: 'San juan de Oriente' },
    { id: 9, nombre: 'La concepción' },
  ]

  densidades: densidad[]=[
    { id: 1, nombre: '1 mz' },
  ]

  variedades: variedad[]=[
    { id: 1, nombre: 'NB6' },
    { id: 2, nombre: 'INTA rojo' },
    { id: 3, nombre: 'INTA sequia amarillo' },
    { id: 4, nombre: 'INTA criollo' },
  ]

  public alter(){
    this.band = !this.band;
  }
}
