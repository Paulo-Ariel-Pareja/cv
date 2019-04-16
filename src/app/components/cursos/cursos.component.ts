import { Component, OnInit } from "@angular/core";
import { Curso } from "src/app/models/curso";
import { Curso2 } from 'src/app/models/curso2';

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"]
})
export class CursosComponent implements OnInit {
  cursosEIT: Curso[] = [];
  cursosGA: Curso[] = [];
  cursosOtros: Curso2[] = [];
  constructor() {}

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let exp1: Curso = {
      fecha: "12/2018",
      nombre: "Programación Java Web Services"
    };
    this.cursosEIT.push(exp1);
    let exp2: Curso = {
      fecha: "12/2018",
      nombre: "Programación Java Web"
    };
    this.cursosEIT.push(exp2);
    let exp3: Curso = {
      fecha: "09/2018",
      nombre: "Programación Android Experto"
    };
    this.cursosEIT.push(exp3);
    let exp4: Curso = {
      fecha: "07/2018",
      nombre: "Cloud Computing"
    };
    this.cursosGA.push(exp4);
    let exp5: Curso = {
      fecha: "07/2018",
      nombre: "Desarrollo de Apps Móviles"
    };
    this.cursosGA.push(exp5);
    let exp7: Curso = {
      fecha: "07/2018",
      nombre: "Programación Android Avanzado"
    };
    this.cursosEIT.push(exp7);
    let exp6: Curso = {
      fecha: "06/2018",
      nombre: "Scrum"
    };
    this.cursosEIT.push(exp6);
    let exp8: Curso = {
      fecha: "05/2018",
      nombre: "Administracion Android"
    };
    this.cursosEIT.push(exp8);
    let exp9: Curso = {
      fecha: "05/2018",
      nombre: "Aplicaciones responsivas en Android"
    };
    this.cursosEIT.push(exp9);
    let exp10: Curso = {
      fecha: "04/2018",
      nombre: "GIT"
    };
    this.cursosEIT.push(exp10);
    let exp13: Curso = {
      fecha: "04/2018",
      nombre: "Google Analytics"
    };
    this.cursosEIT.push(exp13);
    let exp11: Curso = {
      fecha: "01/2018",
      nombre: "Programación Android"
    };
    this.cursosEIT.push(exp11);
    let exp12: Curso = {
      fecha: "12/2017",
      nombre: "Patrones de diseño"
    };
    this.cursosEIT.push(exp12);
    let exp14: Curso = {
      fecha: "08/2017",
      nombre: "Java Standard Programming J2SE 8.0"
    };
    this.cursosEIT.push(exp14);
    let exp15: Curso = {
      fecha: "08/2017",
      nombre: "Introducción a paradigma de objetos"
    };
    this.cursosEIT.push(exp15);
    let exp16: Curso = {
      fecha: "08/2017",
      nombre: "Java Inicial"
    };
    this.cursosEIT.push(exp16);
    let exp17: Curso = {
      fecha: "07/2017",
      nombre: "Introducción a bases de datos (SQL inicial)"
    };
    this.cursosEIT.push(exp17);
    let exp18: Curso2 = {
      fecha: "12/2016",
      nombre: "HTML5 y CSS3",
      institucion: 'UTN'
    };
    this.cursosOtros.push(exp18);
    let exp19: Curso2 = {
      fecha: "12/2016",
      nombre: "JavaScript básico",
      institucion: 'Plataforma de “Miriada X” (Aval de “Fundación Telefónica”)'
    };
    this.cursosOtros.push(exp19);
  }
}
