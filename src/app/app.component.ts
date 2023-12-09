import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  users: User[] = [];
  selectedUsers: User[] = [];
  selectionState: { [id: string]: boolean } = {};
  constructor(private ds: DataService){}
  ngOnInit(){
    this.ds.getdata().subscribe({
      next: (data)=>{
        this.users = data
      },
      error: (err)=>{},
      complete: ()=>{
        console.log(this.users)
      }
    })
  }
  onRowSelect(event: any) {
    this.selectionState[event.data.id] = true;
    console.log('Row Selected:', event.data);
    // Perform actions when a row is selected
    this.updateSelectedUsers();
  }

  onRowUnselect(event: any) {
    this.selectionState[event.data.id] = false;
    console.log('Row Unselected:', event.data);
    // Perform actions when a row is unselected
    this.updateSelectedUsers();

  }
  updateSelectedUsers() {
    // this.selectedUsers = this.users.filter(user => this.selectionState[user.id]);
    console.log(this.selectedUsers)
  }
  onHeaderCheckboxToggle(event: any) {
    const isAllChecked = event.checked;

    // Update selectionState for all users on the current page
    this.selectedUsers.forEach(user => this.selectionState[user.id] = isAllChecked);

    // Update selectedUsers
    this.updateSelectedUsers();
  }
}
