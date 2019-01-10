import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { ProductResolver } from './product-resolver.service';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';

const EDIT_ROUTES = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: ProductEditInfoComponent },
  { path: 'tags', component: ProductEditTagsComponent }
];

const PRODUCT_ROUTES = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent, resolve: { resolvedData: ProductResolver }},
  { 
    path: ':id/edit',
    component: ProductEditComponent,
    resolve: { resolvedData: ProductResolver },
    children: EDIT_ROUTES
  }
];

const ROUTES = [
  { path: 'products', children: PRODUCT_ROUTES }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
<<<<<<< HEAD
    ProductEditComponent,
    ProductFilterPipe,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ],
  providers: [
    ProductService,
    ProductResolver
=======
    ProductEditComponent
>>>>>>> 7df32edb50efc7045f13b9455a0099de0ade67c1
  ]
})
export class ProductModule { }
