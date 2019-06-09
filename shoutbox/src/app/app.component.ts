import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _userService:UserService){}
  title = 'shoutbox';

  onsubmit(){
    this._userService.login().subscribe(
      (data)=>{
        console.log(data.user);
        console.log(data.token);
        localStorage.setItem('access_token',JSON.stringify(data.token));

    },
    (error)=>{console.log(error)})
  }

  onsubmit2(){
    this._userService.feeds().subscribe(
      (data)=>{console.log(data)}
    )
  }
  onsubmit3(){

  }
}
