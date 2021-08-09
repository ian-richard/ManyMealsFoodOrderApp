import { createContext } from 'istanbul-lib-report';
import React from 'react';

const CardContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;