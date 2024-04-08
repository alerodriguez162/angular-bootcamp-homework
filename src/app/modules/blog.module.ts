import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from '../components/article/article.component';

const routes: Routes = [
  {
    path: 'blog',
    children: [
      {
        path: ':slug', // Ruta dinámica basada en el slug
        component: ArticleComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Usa forChild para rutas dentro de módulos feature
  ]
})
export class BlogModule { }
