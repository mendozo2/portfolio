import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {
  productos: any[] = [];
  cargada: boolean = true;
  productosFiltrados: any[] = [];

  constructor(public http: Http) {
    this.cargar_info();
  }

  public cargarProducto(cod: String) {
    return this.http.get(
      `https://mipaginaweb-48545.firebaseio.com/productos/${cod}.json`
    );
  }


  public buscarProducto(termino: string) {
  this.productosFiltrados=[];
  if (this.productos.length===0){
  this.cargar_info().then(()=>{
    this.filtrarProductos(termino);
  });
  }else{
    this.filtrarProductos(termino);
  }
    return this.productosFiltrados;
  }

  private filtrarProductos(termino:string){
    termino=termino.toLowerCase();
    this.productos.forEach(prod => {
      if(prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0){

      this.productosFiltrados.push(prod);}
    });
  }

  public cargar_info() {

    this.cargada=true;
    let promesa = new Promise((resolve,reject)=>{
      this.http
      .get("https://mipaginaweb-48545.firebaseio.com/productos_idx.json")
      .subscribe(data => {
        this.cargada = false;
        this.productos = data.json();
        resolve();
      });
    });

return promesa;
  }
}
