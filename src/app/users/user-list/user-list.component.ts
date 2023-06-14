import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  selectedUserId: number | null = null;

  users = [
    { id: 1, name: 'Bruno' },
    { id: 2, name: 'Dante' },
    { id: 3, name: 'Arnold' }
  ];

  constructor() { }

  ngOnInit(): void {

  }
  showUserDetails(id: number): void {
    this.selectedUserId = id;
  }
  
}
