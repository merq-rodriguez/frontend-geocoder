import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/@core/services/user.service';
import { LocalstorageService } from 'src/app/@core/services/localstorage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  constructor(private userService: UserService, private localstorajeService: LocalstorageService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(u => this.user = u);
    if(!this.user){
      
     this.user = this.localstorajeService.getLocalstorage('user');
    }
    
  }
} 
