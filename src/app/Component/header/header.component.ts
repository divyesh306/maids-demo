import { Component, OnInit } from '@angular/core';
import { Userservice } from 'src/app/Service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  filterText: string = ""; // filter text for user
  constructor(public userService: Userservice) { }

  ngOnInit(): void {
  }

}
