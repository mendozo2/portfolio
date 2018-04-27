import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargada: boolean = true;
  productosFiltrados: any[]=[];

  constructor(public http: Http) {
    this.cargar_info();
  }


  public cargarProducto(cod:String){


      return this.http.get(`https://mipaginaweb-48545.firebaseio.com/productos/${cod}.json`);


  }
  public buscarProducto(termino:string){

    this.productos.forEach(prod =>{
      console.log(prod);
      this.productosFiltrados.push(prod);
    })
    return this.productosFiltrados;
    }





  public cargar_info() {

    if (this.productos.length === 0) {

      this.http.get('https://mipaginaweb-48545.firebaseio.com/productos_idx.json').subscribe(data => {

          this.cargada = false;
          this.productos = data.json();

      });
    }
  }

}
