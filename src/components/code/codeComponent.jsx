import React from 'react';

import Code from './components/code';
import { Languages } from '../../config/languages';
import { Styles } from '../../config/styles';

function CodeComponent(props) {
  const getTexts = index => (props.state.language !== null) && 
    Languages.filter(el => el.value === props.state.language)[0].texts[index];

  const styles = Styles.filter(el => props.state.style === el.value)[0].css;

  /*console.log(

    ${(el.style.includes('&') ? el.style.replace(/&/g, `}.${el.class}`): `${el.style}}`)}

  )*/

  return <Code>
    {`{literal}<style>${styles.map(el => `.${el.class}{${(el.style.includes('&') ? `${el.style.replace('&:first', `}.${el.class}:first`).replace('&:last', `.${el.class}:last`)}` : `${el.style}}`)}`).join('')}</style>{/literal}
    <form class="order-form" action="{$url_for_lead_form}" method="POST">
    ${(props.state.prices) ? `<span class="order-form__price">
    <span class="price_land_s4">{$land_default_prices.s4}</span>
    <span class="price_land_curr">{$land_default_prices.curr}</span>
    </span>
    <span class="order-form__price">
      ${(props.state.free) ? `бесплатно` : `<span class="price_land_s1">{$land_default_prices.s1}</span>
      <span class="price_land_curr">{$land_default_prices.curr}</span>` }
      ${(props.state.star) ? `<span class="order-form__star">*</span>` : ``}
    </span>` : ``}
    <label class="order-form__label">${getTexts(0)}</label>
    <input class="order-form__text" type="text" name="name" required="" placeholder="${getTexts(0)}">
    <label class="order-form__label">${getTexts(1)}</label>
    <input class="order-form__text" type="text" name="phone" required="" placeholder="${getTexts(2)}">
    <button class="order-form__button">${getTexts(3)}</button>
    ${(props.state.caption) ? `<p class="order-form__caption">
      ${(props.state.star) ? `<span class="order-form__star">*</span>` : ``}
      ${props.captionText}
    </p>` : `` }
    <input type="hidden" name="s1" class="price_field_s1" value="{$land_default_prices.s1}">
    <input type="hidden" name="s2" class="price_field_s2" value="{$land_default_prices.s2}">
    <input type="hidden" name="s3" class="price_field_s3" value="{$land_default_prices.s3}"> 
    {$form_hidden_fields}
</form>`}
  </Code>
}

export default CodeComponent;