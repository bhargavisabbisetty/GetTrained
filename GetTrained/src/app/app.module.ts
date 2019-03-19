import { CourseService } from './services/course.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreventAccessService } from './services/prevent-access.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatDividerModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatChipsModule,  MatSelectModule, MatOptionModule, MatTableModule,MatSnackBarModule, MatListModule, MatMenuModule, MatDialogModule, MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { appRoutes } from './routes/routes';
import { ActivateComponent } from './components/activate/activate.component';
import { LoginComponent } from './components/login/login.component';
// import { QueryComponent } from './components/query/query.component';
import { QuerylistComponent } from './components/querylist/querylist.component';
import { AddqueryComponent } from './components/addquery/addquery.component';
import { ListCategoryComponent } from './components/listCategory/listCategory.component';
import { CreateCategoryComponent } from './components/createCategory/createCategory.component';
import {CategoryService} from './services/category.service';
import { CreateCourseAreaComponent } from './components/create-course-area/create-course-area.component';
import { CreateContentComponent } from './components/create-content/create-content.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RemoveSlideDialogComponent } from './components/remove-slide-dialog/remove-slide-dialog.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    ActivateComponent,
    LoginComponent,
    QuerylistComponent,
    AddqueryComponent,
    CreateCategoryComponent,
    ListCategoryComponent,
    CreateCourseAreaComponent,
    CreateContentComponent,
    NavbarComponent,
    CourseCreateComponent,
    CourseListComponent,
    DashboardComponent,
    RemoveSlideDialogComponent,
    ViewCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    NgxMatSelectSearchModule,
    RouterModule.forRoot(appRoutes),
    MatProgressSpinnerModule
  ],
  entryComponents: [RemoveSlideDialogComponent],
  providers: [PreventAccessService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
