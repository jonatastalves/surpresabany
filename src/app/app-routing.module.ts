import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionOneComponent } from './components/section-one/section-one.component';

const routes: Routes = [
  {path: 'homenagem', component: SectionTwoComponent},
  {path:'', component: SectionOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
