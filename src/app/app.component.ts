import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postForm: FormGroup


  constructor(private http: HttpClient) {
  }

  getBaseUrl() {
    return 'http://localhost:3000/';
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      'name': new FormControl(null),
      'content': new FormControl(null)
    });

  }

  submitData() {
    var mew = {
      name: this.postForm.value.name,
      content: this.postForm.value.content
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }


    this.http.post('/api/mews', JSON.stringify(mew), httpOptions).subscribe((data) => console.log(data));
    //console.log(JSON.stringify(mew));
  }

}
