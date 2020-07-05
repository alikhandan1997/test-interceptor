import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response: Observable<any>;
  constructor(private http: HttpClient) {}

  request() {
      const url = 'https://jsonplaceholder.typicode.com/todos/1';
      this.http.get(url).subscribe((data)=> {
        console.log(data)
      });
  }
}
