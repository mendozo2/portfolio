import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargada: boolean = true;

  constructor(public http: Http) {
    this.cargar_info();
  }


  public cargarProducto(cod:String){


      return this.http.get(`https://mipaginaweb-48545.firebaseio.com/productos/${cod}.json`);


  }

  public cargar_info() {

    if (this.productos.length === 0) {

      this.http.get('https://mipaginaweb-48545.firebaseio.com/productos_idx.json').subscribe(data => {
        console.log(data.json());
          this.cargada = false;
          this.productos = data.json();

      });
    }
  }

}
