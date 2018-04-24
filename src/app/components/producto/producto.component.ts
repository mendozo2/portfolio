import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent  {
  producto:any = undefined

  constructor(public route:ActivatedRoute, public _ps:ProductosService){
    route.params.subscribe(parametros=>{
      console.log(parametros);
      console.log(parametros['id']);
    })

  }


}
