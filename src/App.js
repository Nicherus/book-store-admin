import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import Dashboard from './Dashboard';
import authClient from './authClient';

import ProductIcon from 'material-ui/svg-icons/action/book';
import CategoryIcon from 'material-ui/svg-icons/action/card-membership';
import ClientIcon from 'material-ui/svg-icons/action/book';
import OrderIcon from 'material-ui/svg-icons/action/book';

import { ProductList, ProductCreate, ProductEdit, ProductShow } from './resources/products';
import { CategoryList, CategoryCreate, CategoryEdit } from './resources/categories';
import { ClientList, ClientShow } from './resources/clients';
import { OrderList } from './resources/orders';

const App = () => (
    <Admin 
        dashboard={Dashboard} 
        authClient={authClient}
        restClient={jsonServerRestClient('https://api-book-store.herokuapp.com')}
    >
        <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} remove={Delete} icon={CategoryIcon}/>
        <Resource name="products/admin" list={ProductList} edit={ProductEdit} create={ProductCreate} show={ProductShow} remove={Delete} icon={ProductIcon}/>
        <Resource name="clients"  show={ClientShow} list={ClientList} icon={ClientIcon}/>
        <Resource name="orders" list={OrderList} icon={OrderIcon}/>
        <Resource name="addresses"/>
        <Resource name="photos"/>
    </Admin>
);

export default App;