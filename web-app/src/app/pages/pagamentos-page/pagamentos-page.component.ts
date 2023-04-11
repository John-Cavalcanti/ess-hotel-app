import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamentos-page',
  templateUrl: './pagamentos-page.component.html',
  styleUrls: ['./pagamentos-page.component.scss']
})
export class PagamentosPageComponent {
isCard:boolean = true;

getCard():void {
  this.isCard=true;
}

getPix():void {
  this.isCard=false;
}

popupAberto: boolean = false;

  abrirPopup(){
    this.popupAberto = true
  }

  fecharPopup(){
    this.popupAberto = false
  }
}
