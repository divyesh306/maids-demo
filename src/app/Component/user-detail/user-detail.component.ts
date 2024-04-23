import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Userservice } from 'src/app/Service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: any = "0";
  userData: any = {};

  constructor(
    public activateRoute: ActivatedRoute,
    private userService: Userservice
  ) {
    this.userId = this.activateRoute.snapshot.paramMap.get('userId'); // get userId from routing
    this.userService.userDetail.subscribe((user: any) => this.userData = user); // get user data from userDetail observable
  }

  ngOnInit(): void {
    this.userService.getUserDetails(this.userId);
  }

}
