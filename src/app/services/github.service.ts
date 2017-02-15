import {Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http'; 
import 'rxjs/add/operator/map'; 

@Injectable()
    export class GitHubService {
        private username: string;
        private client_id = 'a741e6494f3bb622ec45';
        private client_secret = 'cf1d8ded21efb06f60aeeb9aadc4ad27cdd69475';

        constructor (private _http: Http) {
           
         
        }
        getUser() {
            return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json());
        }
        getRepos() {
            return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json());
        }
        updateUser(username: string) {
            this.username = username;
        }
        
    }
 