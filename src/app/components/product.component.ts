import { Component, Input, Output, EventEmitter } from '@angular/core'; //decorador
import { Product } from '../product.model'; //es una interface que define un modelo/model de tipado

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  //styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = Input();
  @Output() addedToCart: EventEmitter<any> = new EventEmitter();

  addToCart(){
    console.log('agregado al carrito');
    this.addedToCart.emit(this.product.id)
  }
}
