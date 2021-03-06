import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from "./content/content.component";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserDataService } from "./user-data.service";
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { MatSelectModule } from "@angular/material/select";
import { NewsComponent } from './news/news.component';
import { AnnotateComponent } from './annotate/annotate.component';
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { LBComponent } from './lb/lb.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TermsComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    PermissionsComponent,
    AdminComponent,
    NewsComponent,
    AnnotateComponent,
    LBComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [
      UserDataService
  ],
  exports: [
    ContentComponent,
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
