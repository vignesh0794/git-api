import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid='Iv1.41b7280e6a4dc241';
  private clientsecret='469beb0eaf457b8e4fb6295e2e5cadec3cea8cde';
  constructor(private http:HttpClient) { 
    console.log("service is now ready");
    this.username='';
  }
   getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)

  }

  updateProfile(username:string){
    this.username = username;
  }

}
