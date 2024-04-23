import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userservice } from 'src/app/Service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userlist: any =[];
  filterText: string = ""; 
  pageination: any = {
    totalPage: 0,
    totalRecords:0,
    perPage: 0,
    currentPage: 0
  };

  constructor(
    private userService: Userservice,
    private router: Router
  ) {
    // get user list and pagination information from users observable
    this.userService.users.subscribe((users: any) => {
      this.userlist = users.data;
      this.pageination.totalPage = users.total_pages;
      this.pageination.perPage = users.per_page;
      this.pageination.totalRecords = users.total
      this.pageination.currentPage = users.page;
    });

    this.userService.fiterString.subscribe((text: string) => this.filterText = text); // get filter text from filterstring observable
   }

  ngOnInit(): void {
    // call get user api from user service
    this.userService.getUsers();
  }

  getPageData(page: number) {
    this.pageination.currentPage = page;
    this.userService.getUsers(page);
  }

  navigateToUser(userId: string){
    // navigate user detail page when click on user card
    this.router.navigate([`/user/${userId}`])
  }
}
