import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddDialogComponent } from '../dialogs/addUser/addUser.dialog.component';


// only for test, delete for production
export interface user{
  id: number;
  name: string;
  firstName: string;
  phoneNumber: string;
  password: string;
  role: string;
}
// only for test, delete for production
const USERS: user[] = [
  {
    id: 0,
    name: 'ravaux',
    firstName: 'nicolas',
    phoneNumber: '0488-45-27-25',
    password: 'password',
    role: 'user',
  },
  {
    id: 1,
    name: 'minucci',
    firstName: 'maxence',
    phoneNumber: '0497-45-27-25',
    password: 'password',
    role: 'administrator',
  },
  {
    id: 2,
    name: 'amina',
    firstName: 'jamie',
    phoneNumber: '0458-45-27-25',
    password: 'password',
    role: 'baker',
  },
  {
    id: 3,
    name: 'minucci',
    firstName: 'maxence',
    phoneNumber: '0497-45-27-25',
    password: 'password',
    role: 'administrator',
  },
  {
    id: 4,
    name: 'amina',
    firstName: 'jamie',
    phoneNumber: '0458-45-27-25',
    password: 'password',
    role: 'baker',
  },
  {
    id: 5,
    name: 'minucci',
    firstName: 'maxence',
    phoneNumber: '0497-45-27-25',
    password: 'password',
    role: 'administrator',
  },
  {
    id: 6,
    name: 'amina',
    firstName: 'jamie',
    phoneNumber: '0458-45-27-25',
    password: 'password',
    role: 'baker',
  },
  {
    id: 7,
    name: 'minucci',
    firstName: 'maxence',
    phoneNumber: '0497-45-27-25',
    password: 'password',
    role: 'administrator',
  },
  {
    id: 8,
    name: 'amina',
    firstName: 'jamie',
    phoneNumber: '0458-45-27-25',
    password: 'password',
    role: 'baker',
  },

]

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit{
  column: string[] = ['id', 'name', 'firstName', 'phoneNumber', 'role', 'actions'];
  dataSource = new MatTableDataSource(USERS);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(public dialogService: MatDialog){}

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openAddDialog(){
    const dialogRef = this.dialogService.open(AddDialogComponent, {
      data: {issue: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        /* this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable(); */
      }
    });
  }
  startEdit(){}
  deleteItem(){}
}