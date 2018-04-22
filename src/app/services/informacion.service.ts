import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info: any = {};
  acercaDe: any = {};
  cargada: boolean = false;
  cargada_about: boolean = false;


  constructor(public http: Http) {
    this.cargar_info();
    this.cargar_acercaDe();
  }

  public cargar_info() {
    this.http.get('assets/data/info.pagina.json').subscribe(data => {
      this.cargada = true;
      this.info = data.json();
    });
  }

  public cargar_acercaDe() {
    this.http.get('https://mipaginaweb-48545.firebaseio.com/equipo.json').subscribe(data => {
      this.cargada_about = true;
      this.acercaDe = data.json();
    });
  }
}
