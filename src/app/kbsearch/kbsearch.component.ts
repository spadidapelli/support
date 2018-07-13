import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-kbsearch',
  templateUrl: './kbsearch.component.html',
  styleUrls: ['./kbsearch.component.scss']
})
export class KbsearchComponent implements OnInit {

  constructor(private http: Http) { }
  kbList = {};
  showKbList = false;
  spinner = false;
  ngOnInit() {

  }
  onKey(event: any) {
    this.spinner = true;
    if (event.target.value.length > 2) {
      let url = 'http://localhost:4200/images/kbList.json';
      this.http.get(url).subscribe(res => this.kbList = res.json());
      this.showKbList = true;
      this.spinner = false;
    } else {
      this.showKbList = false;
      this.spinner = false;
    }
  }
}
