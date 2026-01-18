import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Cosmetic } from './cosmetic/cosmetic';
import { Contacts } from './contacts/contacts';
import { Customers } from './customers/customers';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'cosmetic',
    component: Cosmetic
  },
  {
    path: 'contacts',
    component: Contacts
  },
  {
    path: 'customers',
    component: Customers
  },
  {
    path: 'product/:id',
    component: ProductDetail
  }
];