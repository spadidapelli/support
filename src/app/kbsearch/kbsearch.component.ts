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
  ngOnInit() {
    let url = 'http://localhost:4200/images/kbList.json';
    this.http.get(url).subscribe(res => this.kbList = res.json());
  }
  onKey(event: any) { 

    if (event.target.value.length) {
      this.showKbList = true;
    }else{
      this.showKbList = false;
    }
  }
}
