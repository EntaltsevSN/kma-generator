import React from 'react';

import OrderForm from "./components/orderForm";
import OrderFormPrice from "./components/orderFormPrice";
import OrderFormLabel from './components/orderFormLabel';
import OrderFormText from './components/orderFormText';
import OrderFormButton from './components/orderFormButton';
import OrderFormCaption from './components/orderFormCaption';
import OrderFormStar from './components/orderFormStar';

import { Languages } from '../../config/languages';
import { Styles } from '../../config/styles';

function OrderFormComponent(props) {
  const getTexts = index => (props.state.language !== null) && 
    Languages.filter(el => el.value === props.state.language)[0].texts[index]; 
    
  const styles = Styles.filter(el => props.state.style === el.value)[0].css;

  return <OrderForm order-form styles={styles}>
    {(props.state.prices) &&
      <OrderFormPrice order-form__price styles={styles}>
        999 руб.
      </OrderFormPrice>
    }
    {(props.state.prices) &&
      <OrderFormPrice order-form__price styles={styles}>
        {(props.state.free) ? `бесплатно` : `499 руб.` }
        {(props.state.star) && <OrderFormStar styles={styles}>*</OrderFormStar> }
      </OrderFormPrice>
    }
    <OrderFormLabel order-form__label styles={styles}>{getTexts(0)}</OrderFormLabel>
    <OrderFormText order-form__text styles={styles} placeholder={getTexts(0)} />
    <OrderFormLabel order-form__label styles={styles}>{getTexts(1)}</OrderFormLabel>
    <OrderFormText order-form__text styles={styles} placeholder={getTexts(2)} />
    <OrderFormButton order-form__button styles={styles} type="submit" onClick={
      e => e.preventDefault()
    } value={getTexts(3)} />
    {(props.state.caption) &&
      <OrderFormCaption order-form__caption styles={styles}>
        {(props.state.star) && <OrderFormStar styles={styles}>*</OrderFormStar> }
        {props.state.captionText}
      </OrderFormCaption>
    }
  </OrderForm>
}

export default OrderFormComponent;