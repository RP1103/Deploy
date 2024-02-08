import { Component } from '@angular/core';
import { WebIntent } from '@awesome-cordova-plugins/web-intent/ngx';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage  {

    constructor(private webIntent: WebIntent) { }

   upi() {
    const options = {
      action: this.webIntent.ACTION_VIEW,
      url:'upi://pay?pa=vipvenkatesh453@okaxis&pn=venkat&tn=Welcome&cu=INR',//upi://pay?pa=vipvenkatesh453@okaxis&tn=for order&cu=INR',
    };

    this.webIntent.startActivityForResult(options).then(
      onSuccess =>{
        console.log('Success',onSuccess);
      },
      onError =>{
        console.log('error', onError);
      });
  }


}
