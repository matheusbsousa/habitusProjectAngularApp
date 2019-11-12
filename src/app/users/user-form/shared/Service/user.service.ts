import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entity/user';
import {Observable} from 'rxjs';

const URL = 'http://localhost:8080/habitus-api/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(URL);
  }


}
