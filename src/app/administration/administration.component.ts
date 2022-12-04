import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


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

]

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

export class AdministrationComponent implements OnInit{

  ngOnInit(): void {

  }

  column: string[] = ['id', 'name', 'firstName', 'phoneNumber', 'role'];
  dataSource = new MatTableDataSource(USERS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
