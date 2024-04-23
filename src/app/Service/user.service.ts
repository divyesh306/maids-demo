import { Injectable } from '@angular/core';
import { Httpservice } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { apiEndpoints } from '../Utils/constant/Apiendpoint';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class Userservice {

  private userLists = new BehaviorSubject([]); // stream for user list
  private singleUserDetail: any = new BehaviorSubject({}); // stream for user detail
  private filterText: any = new BehaviorSubject('');

  users = this.userLists.asObservable(); // userlist observable
  userDetail = this.singleUserDetail.asObservable();// userdetail observable
  fiterString = this.filterText.asObservable(); // filter string observable

  setFilterText(filterText: any){
    this.filterText.next(filterText);
  }

  constructor(
    private httpService: Httpservice,
    private loaderService: NgxSpinnerService
  ) {}

//  call user list api
  getUsers(page: number = 1) {
    this.loaderService.show();
    this.httpService.maidsGet(apiEndpoints.user.list, `page=${page}`).subscribe(
      (res: any) => {
        this.loaderService.hide();
        this.userLists.next(res);
      },
      (err) => {
        this.loaderService.hide();
      }
    );
  }

//   call particular userdetails api
  getUserDetails(userId: string) {
    this.loaderService.show();
    this.httpService
      .maidsGet(apiEndpoints.user.singleUser.replace(':userId', userId))
      .subscribe(
        (res: any) => {
            this.loaderService.hide();
            this.singleUserDetail.next(res.data);
        },
        (err) => {
            this.loaderService.hide();
        }
      );
  }
}
