// import { Component, OnInit } from '@angular/core';
// import { TimesheetService } from '../services/timesheet.service';

// @Component({
//   selector: 'app-sal',
//   templateUrl: './sal.page.html',
//   styleUrls: ['./sal.page.scss'],
// })
// export class SalPage implements OnInit {

//   worklogData: any[] = [];
//   totalWorkingHours: number = 0;
//   calculatedSalary: number = 0;
//   selectedName: string = '';
//   filteredWorklogData: any[] = [];
//   uniqueNames: string[] = [];

//   constructor(private timesheetService: TimesheetService) {}

//   ngOnInit(): void {
//     this.fetchWorklogEntries();
//   }

//   fetchWorklogEntries(): void {
//     this.timesheetService.getWorklogEntries().subscribe(
//       (entries: any[]) => {
//         this.worklogData = entries.slice(0, 31);
//         this.updateUniqueNames(); // Update unique names when data is fetched
//         this.filterEntries(); // Initial filter when data is fetched
//       },
//       error => {
//         console.error('Error fetching entries:', error);
//       }
//     );
//   }

//   updateUniqueNames(): void {
//     // Extract unique names from worklogData
//     const uniqueNamesSet = new Set<string>(this.worklogData.map(entry => entry.name));
//     this.uniqueNames = Array.from(uniqueNamesSet);
//   }

//   addEntry(): void {
//     const newEntry = {
//       date: '',
//       name: '',
//       checkIn: '',
//       checkOut: '',
//       totalHours: '',
//       description: '',
//     };
//     this.worklogData.unshift(newEntry);
//     this.filterEntries(); // Update filtered entries when a new entry is added
//   }

//   saveEntries(): void {
//     this.filterEntries(); // Update filtered entries before saving
//     this.calculateTotalHours(); // Recalculate total hours for filtered entries

//     const entriesToInsert = this.worklogData.filter(entry => entry.date.trim() !== '');
//     this.timesheetService.addWorklogEntries(entriesToInsert).subscribe(
//       response => {
//         console.log('Entries added successfully:', response);
//         this.clearForm();
//         this.fetchWorklogEntries();
//       },
//       error => {
//         console.error('Error adding entries:', error);
//       }
//     );
//   }

  
//   calculateTotalHours(): void {
//     this.totalWorkingHours = 0;

//     // Calculate total hours only for the filtered entries
//     this.filteredWorklogData.forEach(entry => {
//       if (entry.totalHours !== '' && !isNaN(parseFloat(entry.totalHours))) {
//         this.totalWorkingHours += parseFloat(entry.totalHours);
//       }
//     });

//     // Calculate salary based on the total working hours and a fixed rate (51.28 rs per hour)
//     this.calculatedSalary = this.totalWorkingHours * 51.28;
//   }

//   filterEntries(): void {
//     this.updateUniqueNames(); // Update unique names when entries are filtered

//     if (this.selectedName) {
//       this.filteredWorklogData = this.worklogData.filter(entry => entry.name === this.selectedName);
//     } else {
//       this.filteredWorklogData = this.worklogData;
//     }

//     this.calculateTotalHours(); // Recalculate total hours when entries are filtered
//   }

//   clearForm(): void {
//     this.worklogData.forEach(entry => {
//       entry.date = '';
//       entry.name = '';
//       entry.checkIn = '';
//       entry.checkOut = '';
//       entry.totalHours = '';
//       entry.description = '';
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { TimesheetService } from '../services/timesheet.service';

@Component({
  selector: 'app-sal',
  templateUrl: './sal.page.html',
  styleUrls: ['./sal.page.scss'],
})
export class SalPage implements OnInit {

  worklogData: any[] = [];
  totalWorkingHours: number = 0;
  calculatedSalary: number = 0;
  selectedName: string = '';
  selectedMonth: string = '';
  filteredWorklogData: any[] = [];
  uniqueNames: string[] = [];
  uniqueMonths: string[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 30;
  totalPages: number = 1;

  constructor(private timesheetService: TimesheetService) {}

  ngOnInit(): void {
    this.fetchWorklogEntries();
  }

  fetchWorklogEntries(): void {
    this.timesheetService.getWorklogEntries().subscribe(
      (entries: any[]) => {
        this.worklogData = entries.slice(0, 31);
        this.updateUniqueNames();
        this.updateUniqueMonths();
        this.filterEntries();
      },
      error => {
        console.error('Error fetching entries:', error);
      }
    );
  }

  updateUniqueNames(): void {
    const uniqueNamesSet = new Set<string>(this.worklogData.map(entry => entry.name));
    this.uniqueNames = Array.from(uniqueNamesSet);
  }

  updateUniqueMonths(): void {
    const uniqueMonthsSet = new Set<string>(this.worklogData.map(entry => entry.date.substring(0, 7)));
    this.uniqueMonths = Array.from(uniqueMonthsSet);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filterEntries();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.filterEntries();
    }
  }

  filterEntries(): void {
    this.updateUniqueNames();
    this.updateUniqueMonths();

    let filteredData = this.worklogData;

    // Filter by selected name
    if (this.selectedName) {
      filteredData = filteredData.filter(entry => entry.name === this.selectedName);
    }

    // Filter by selected month
    if (this.selectedMonth) {
      filteredData = filteredData.filter(entry => entry.date.startsWith(this.selectedMonth));
    }

    this.totalPages = Math.ceil(filteredData.length / this.itemsPerPage);

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredWorklogData = filteredData.slice(startIndex, endIndex);

    this.calculateTotalHours();
  }

  calculateTotalHours(): void {
    this.totalWorkingHours = 0;

    this.filteredWorklogData.forEach(entry => {
      if (entry.totalHours !== '' && !isNaN(parseFloat(entry.totalHours))) {
        this.totalWorkingHours += parseFloat(entry.totalHours);
      }
    });

    this.calculatedSalary = this.totalWorkingHours * 51.28;
  }

}