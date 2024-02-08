import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

//import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { InvoiceComponent } from './components/invoice/invoice.component';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Stripe } from '@ionic-native/stripe/ngx';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebIntent } from '@awesome-cordova-plugins/web-intent/ngx';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent,InvoiceComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule],
  providers: [Stripe,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy ,},
    
    WebIntent,


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
