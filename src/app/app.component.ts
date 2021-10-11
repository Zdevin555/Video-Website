/* Default component for Angular
AUTHOR: Diwen Zhang
EMAIL:  zhangdiw@sheridancollege.ca
CREATED: 2021-08-13
UPDATED: 2021-08-14 
*/
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos:any;
  //inject httpclient service to load local json
  constructor(http:HttpClient){
    const URL = "assets/video_diwenzhang.json";
    http.get(URL).subscribe(json => {
      this.videos = json;
    },error => {
      console.log(error.message);
    });
  }

  openVideo(index:number){
    let url = this.videos[index].url;
    window.open(url,"_blank");
  }

  getAvatarUrl(index:number){
    let url:string;
    url = "url('"+this.videos[index].avatarUrl+"')";
    return url;
  }
}
