import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    constructor(private http: Http) {}

    getUsers() {
        let address = 'https://randomuser.me/api?inc=gender,name,picture,location&results=8&nat=gb';
        return this.http.get(address)
            .map(function(response) {
                return response.json();
            })
            .map(resp => resp.results)
            .map(users => {
                return users.map(u => {
                    return {
                        name: u.name.first + ' ' + u.name.last
                    }
                })
            });
    }
}
