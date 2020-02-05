import React from 'react';

import OrderForm from "./components/orderForm";
import OrderFormPrice from "./components/orderFormPrice";
import OrderFormLabel from './components/orderFormLabel';
import OrderFormText from './components/orderFormText';
import OrderFormButton from './components/orderFormButton';

function OrderFormComponent(props) {
  return <OrderForm>
    <OrderFormPrice old>
      999 руб.
    </OrderFormPrice>
    <OrderFormPrice new>
      499 руб.
    </OrderFormPrice>
    <OrderFormLabel></OrderFormLabel>
    <OrderFormText />
    <OrderFormLabel></OrderFormLabel>
    <OrderFormText />
    <OrderFormButton type="submit" />
  </OrderForm>
}

export default OrderFormComponent;