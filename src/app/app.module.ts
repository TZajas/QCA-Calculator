import { ResultComponentComponent } from './main-components/result-component/result-component.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GradeButtonComponentComponent } from './main-components/grade-button-component/grade-button-component.component';
import { FooterComponentComponent } from './main-components/footer-component/footer-component.component';
import { HeaderComponentComponent } from './main-components/header-component/header-component.component';

let routes : any= [
  { path: '', redirectTo: 'grades', pathMatch: 'full' },
  { path: 'grades', component: GradeButtonComponentComponent},
  { path: 'result', component: ResultComponentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    GradeButtonComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
