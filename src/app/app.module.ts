import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CakedashboardComponent } from './cakedashboard/cakedashboard.component';
import { CakeCardComponent } from './cake-card/cake-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { OrderFormComponent } from './order-form/order-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FeedbackComponent } from './feedback/feedback.component';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { SearchComponent } from './search/search.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HeaderComponent } from './header/header.component';
import { MatSelectModule } from '@angular/material/select';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CakedashboardComponent,
    CakeCardComponent,
    OrderFormComponent,
    FeedbackComponent,
    CakeDetailComponent,
    SearchComponent,
    HeaderComponent,
    NotfoundcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
