import { Component, OnInit } from "@angular/core";
import { Experiencia } from "src/app/models/experiencia";

@Component({
  selector: "app-experiencia",
  templateUrl: "./experiencia.component.html",
  styleUrls: ["./experiencia.component.css"]
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];
  constructor() {}

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let exp1: Experiencia = {
      desde: "10/2010",
      hasta: "Presente",
      empresa: "Marpolo S.A. - Morph",
      rubro: "Comercial",
      cargo: "Desarrollador / Administrativo",
      descripcion: "Desarrollador en Java, Angular y en Visual Basic for Applications. Realización de inventarios y responsable de seguimientos de estos.",
      motivo: 'Actualmente trabajando.'
    };
    this.experiencia.push(exp1);
    let exp2: Experiencia = {
      desde: "03/2010",
      hasta: "10/2010",
      empresa: "Cheek S.A. - Cheeky",
      rubro: "Indumentaria",
      cargo: "Bodeguero",
      descripcion: "Recepcion y control de mercaderia.",
      motivo: 'Renuncia.'
    };
    this.experiencia.push(exp2);
    let exp3: Experiencia = {
      desde: "05/2009",
      hasta: "12/2009",
      empresa: "Securitas Argentina S.A.",
      rubro: "Seguridad privada",
      cargo: "Vigilador",
      descripcion: "Seguridad con portacion de arma, control de ingreso/egreso de personal.",
      motivo: 'Renuncia.'
    };
    this.experiencia.push(exp3);
    let exp4: Experiencia = {
      desde: "02/2009",
      hasta: "04/2009",
      empresa: "Teleperformance",
      rubro: "Help desk",
      cargo: "Agente de mesa de ayuda",
      descripcion: "Soporte tecnico a clientes de Arnet.",
      motivo: 'Renuncia.'
    };
    this.experiencia.push(exp4);
    let exp5: Experiencia = {
      desde: "11/2008",
      hasta: "04/2009",
      empresa: "Dabahmark S.R.L.",
      rubro: "Telemarketer",
      cargo: "Vendedor",
      descripcion: "Ventas telefonicas para cuenta de CTI.",
      motivo: 'Renuncia.'
    };
    this.experiencia.push(exp5);
    let exp6: Experiencia = {
      desde: "01/2006",
      hasta: "11/2008",
      empresa: "Cybercafe Lan House",
      rubro: "Comercial",
      cargo: "Operario",
      descripcion: "Atencion al cliente y mantenimiento de equipos.",
      motivo: 'Renuncia.'
    };
    this.experiencia.push(exp6);
    let exp7: Experiencia = {
      desde: "08/2003",
      hasta: "12/2005",
      empresa: "Coto",
      rubro: "Comercial",
      cargo: "Recepcionista / Data entry (sub encargado)",
      descripcion: "Recepcion de mercaderia y data entry.",
      motivo: 'Renuncia.'
    };
    this.experiencia.push(exp7);
    let exp8: Experiencia = {
      desde: "02/2001",
      hasta: "08/2003",
      empresa: "Burger King",
      rubro: "Fast food",
      cargo: "Bodeguero",
      descripcion: "Recepcion de mercaderia y encargado de deposito con personal a cargo.",
      motivo: 'Renuncia.'
    };
    this.experiencia.push(exp8);
    let exp9: Experiencia = {
      desde: "07/2000",
      hasta: "09/2000",
      empresa: "El mundo del juguete",
      rubro: "Jugueteria",
      cargo: "Cadete",
      descripcion: "Atencion al publico, ventas y limpieza.",
      motivo: 'Fin de temporada.'
    };
    this.experiencia.push(exp9);
    let exp10: Experiencia = {
      desde: "12/1998",
      hasta: "12/1999",
      empresa: "Gastronomía San Isidro",
      rubro: "Panaderia",
      cargo: "Cajero, delivery y ayudante de maestro de pala",
      descripcion: "Cajero, delivery y ayudante de maestro de pala",
      motivo: 'Cierre de comercio.'
    };
    this.experiencia.push(exp10);
  }
}
