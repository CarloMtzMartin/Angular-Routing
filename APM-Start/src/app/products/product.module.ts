import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

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
    ProductEditComponent,
    ProductFilterPipe,
    ProductEditInfoComponent,
    ProductEditTagsComponent
  ],
  providers: [
    ProductService,
    ProductResolver
  ]
})
export class ProductModule {}
