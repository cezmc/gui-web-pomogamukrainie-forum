import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { BreadcrumbLabels, CategoryRoutingName } from '@app/shared/models';
import { TranslationsSearchComponent } from './translations-search.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: null,
    },
    children: [
      {
        path: '',
        component: TranslationsSearchComponent,
        data: {
          title: null,
        },
      },
      {
        path: CategoryRoutingName.NOT_FOUND,
        component: NotFoundComponent,
        loadChildren: () => import('../../shared/components/not-found/not-found.module').then((m) => m.NotFoundModule),
        data: {
          title: null,
        },
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../view-offer-translations/view-offer-translations.module').then(
            (m) => m.ViewOfferTranslationsModule
          ),
        data: {
          title: BreadcrumbLabels.AD,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslationsSearchRoutingModule {}
