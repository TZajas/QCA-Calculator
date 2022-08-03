import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, public title:Title
  ) { }

  QCA:any;

  ngOnInit(): void {
    this.title.setTitle("Result")

    this.route.queryParams.subscribe((params: any) => {
      console.log(params)
      this.QCA = params.data;
    })
  }
}
