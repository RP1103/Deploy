import { Component } from '@angular/core';
import { WorklogService } from '../services/worklog.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-imageupload2',
  templateUrl: 'imageupload2.page.html',
  styleUrls: ['imageupload2.page.scss'],
})
export class Imageupload2Page  {
  
 entries: any[];
  signedInUser: string; // Track the signed-in user
  dateValue: string;
  checkInValue: string;
  checkOutValue: string;
  totalHoursValue: string;
  descriptionValue: string;
  selectedMonth: string;

  constructor(private alertController: AlertController, private worklogService: WorklogService) {}

  ionViewDidEnter() {
    this.promptSignIn(); // Always prompt for sign-in on page enter
    this.selectedMonth = ''; // Default to no month filter
    this.getWorklogEntries();
  }

  async promptSignIn() {
    const alert = await this.alertController.create({
      header: 'Sign In',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Username',
        },
      ],
      buttons: [
        {
          text: 'Sign In',
          handler: (data) => {
            this.signIn(data.username);
          },
        },
      ],
    });

    await alert.present();
  }

  signIn(user: string) {
    this.signedInUser = user;
  }

  getWorklogEntries() {
    this.worklogService.getWorklogEntries().subscribe(
      (data) => {
        this.entries = data;
      },
      (error) => {
        console.error('Error fetching entries:', error);
      }
    );
  }

  addWorklogEntry() {
    if (this.signedInUser && this.dateValue && this.checkInValue && this.checkOutValue && this.totalHoursValue && this.descriptionValue) {
      const newEntry = {
        name: this.signedInUser,
        date: this.dateValue,
        checkIn: this.checkInValue,
        checkOut: this.checkOutValue,
        totalHours: this.totalHoursValue,
        description: this.descriptionValue,
      };

      this.worklogService.addWorklogEntry(newEntry).subscribe(
        () => {
          this.getWorklogEntries();
          this.clearForm();
        },
        (error) => {
          console.error('Error adding entry:', error);
        }
      );
    } else {
      this.promptSignIn();
    }
  }

  clearForm() {
    this.dateValue = '';
    this.checkInValue = '';
    this.checkOutValue = '';
    this.totalHoursValue = '';
    this.descriptionValue = '';
  }

  filterEntriesByMonth(month: string) {
    this.selectedMonth = month;
    this.getWorklogEntries();
  }

  getFilteredEntries() {
    if (this.selectedMonth) {
      // Filter entries based on selected month
      return this.entries.filter((entry) => entry.date.startsWith(this.selectedMonth));
    } else {
      return this.entries;
    }
  }
}