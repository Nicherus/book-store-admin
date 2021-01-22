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
import { ClientList } from './resources/clients';
import { OrderList } from './resources/orders';

const App = () => (
    <Admin 
        dashboard={Dashboard} 
        authClient={authClient}
        restClient={jsonServerRestClient('http://localhost:3001')}
    >
        <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} remove={Delete} icon={CategoryIcon}/>
        {/* <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} remove={Delete} icon={ProductIcon}/> */}
        <Resource name="products" list={ProductList} icon={ProductIcon}/>
        <Resource name="clients" list={ClientList} icon={ClientIcon}/>
        <Resource name="orders" list={OrderList} icon={OrderIcon}/>
        <Resource name="addresses"/>
    </Admin>
);

export default App;