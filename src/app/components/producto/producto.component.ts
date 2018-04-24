import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent  {
  producto:any = undefined;
  cod:string=undefined;

  constructor(public route:ActivatedRoute, public _ps:ProductosService){
    route.params.subscribe(parametros=>{

      this.cod=parametros['id'];
      
      _ps.cargarProducto(this.cod)
      .subscribe(res=>{
        this.producto=res.json();
        console.log(this.producto);
      })
    })

  }


}
