import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllContentComponent } from './all-content-pages/all-content.component';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { TechnologyComponent } from './technology/technology.component';

const contentRoutes: Routes = [
  {
    path: '',
    component: AllContentComponent,
    children: [
      {
        path: 'home',
        component: WidgetsComponent
      },
      {
        path: 'technology',
        component: TechnologyComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AllContentComponent,
    WidgetsComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(contentRoutes)
  ]
})
export class AllContentModule { }
