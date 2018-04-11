import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image',
  templateUrl: 'image.html'
})
export class ImageComponent {
  @Input() item: object;
  @Output("item-click") _itemClick = new EventEmitter();
  @Output("cart-click") _cartClick = new EventEmitter();
  text: string;

  constructor() {
    console.log('Hello ImageComponent Component');
    this.text = 'Hello World';
  }
  onClick(item) {
    this._itemClick.emit(item)
  }
  onCartClick(item) {
    this._cartClick.emit(item)
  }
}
