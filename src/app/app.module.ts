import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Response } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserService } from './service/user.service';
import { UserCommentService } from './service/user.comment.service';

const appRoutes: Routes = [
  { path: 'detail',      component: UserdetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    Ng2PageScrollModule.forRoot()  
  ],
  exports: [ RouterModule ],
  providers: [UserService, UserCommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
