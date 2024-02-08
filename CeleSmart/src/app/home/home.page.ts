import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { InvoiceComponent } from '../components/invoice/invoice.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 // public order = environment.orderData;

  constructor(private modalCtrl: ModalController) { }

  async openInvoice(order) {
    const InvoiceModal = await this.createModal(InvoiceComponent, { order });
    await InvoiceModal.present();
  }

  async createModal(component, componentProps?, cssClass?): Promise<HTMLIonModalElement> {
    const modal = await this.modalCtrl.create({
      component,
      cssClass,
      componentProps,
      backdropDismiss: true
    });
    return modal;
  }
}