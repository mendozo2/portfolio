import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent {
  termino: string = undefined;

  constructor(public route: ActivatedRoute, public _ps: ProductosService) {
    route.params.subscribe(parametros => {
      this.termino = parametros["termino"];
      console.log("search" + this.termino);
      _ps.buscarProducto(this.termino);
    });
  }
}
