import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './components/toast/toast-container-component';
import { SectionTwoComponent } from './components/section-two/section-two.component';




@NgModule({
  declarations: [
    AppComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgbTooltipModule,
    ToastsContainer,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
