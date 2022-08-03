
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-grade-button-component',
  templateUrl: './grade-button-component.component.html',
  styleUrls: ['./grade-button-component.component.css']
})
export class GradeButtonComponentComponent implements OnInit {

  @Input() input : any;

  @Output() score = new EventEmitter();

  constructor(private route: Router, public title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("UL QCA Calculator");
  }

  subjectCount : number=0;
  subjects : string="";
  average:number=0;
  result:any;
  

  subjectIncrement(grade:any){
    // if(this.subjectCount == this.errorMessage){
    //   this.subjectCount = 0;
    //   this.subjects = "";
    //   this.average=0;
    // }
    this.subjectCount++;
    this.subjects+=grade.name + " | ";
    this.average += grade.grade;
    this.result = this.average/this.subjectCount;
    // if(this.subjectCount>5){
    //   this.subjectCount = this.errorMessage;
    //   this.subjects="";
    // }
  }

  reset(){
    this.subjects ="";
    this.subjectCount=0;
  }

  navToResultComponent(){
    if(this.subjectCount==5){
      this.route.navigate(['result'], {queryParams:{data:parseFloat(this.result).toFixed(2)}})
    }
  }

  UL_Grades : Grade[] = [
    {name : "A1", grade : 4.0},
    {name : "A2", grade : 3.6},
    {name : "B1", grade : 3.2},
    {name : "B2", grade : 3.0},
    {name : "B3", grade : 2.8},
    {name : "C1", grade : 2.6},
    {name : "C2", grade : 2.4},
    {name : "C3", grade : 2.0},
    {name : "D1", grade : 1.6},
    {name : "D2", grade : 1.2},
    {name : "F", grade : 0.0},
]

}

class Grade {
  name : any;
  grade : any;
}
