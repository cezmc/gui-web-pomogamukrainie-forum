import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferOtherComponent } from './view-offer-other.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferOtherComponent,
    data: {
      title: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferOtherRoutingModule {}
