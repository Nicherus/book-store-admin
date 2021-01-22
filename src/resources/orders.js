import React from 'react';
import { List, Datagrid, ReferenceManyField, ChipField, SingleFieldList, ReferenceField,TextField} from 'admin-on-rest';

export const OrderList = (props) => (
    <List title="Pedidos" {...props}>
        <Datagrid>
            <TextField source="id"/>
            <ReferenceField label="Cliente" source="clientId" reference="clients">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceManyField source="productOrders.productId" label="Produtos" reference="products" target="productOrders.productId">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField>
            <TextField label="Preço Total" source="totalPrice"/>
        </Datagrid>
    </List>
);
