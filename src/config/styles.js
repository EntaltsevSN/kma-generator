import { Spacer, Color } from '../components/common/variables';

export const Styles = [
  {
    "value": "standard",
    "label": "standard",
    "css": [
      {
        "class": "order-form",
        "style": `
          width: 100%;
          padding: ${Spacer.big};
          border: 1px solid ${Color.text};
          text-align: center;
          box-sizing: border-box;
        `
      },
      {
        "class": "order-form__price",
        "style": `
          display: inline-block;
          margin: 0 ${Spacer.small} ${Spacer.medium};
    
          &:first-of-type {
            text-decoration: line-through;
          }
          &:last-of-type {
            font-weight: bold;
          }
        `
      },
      {
        "class": "order-form__label",
        "style": `
          display: block;
          margin: 0 auto ${Spacer.small}
        `
      },
      {
        "class": "order-form__text",
        "style": `
          display: block;
          margin: 0 auto ${Spacer.medium};
          border-radius: calc(${Spacer.small} / 2);
          border: 1px solid ${Color.text};
          padding: ${Spacer.small} ${Spacer.medium};
        `
      },
      {
        "class": "order-form__button",
        "style": `
          margin: calc(${Spacer.small} / 2) auto ${Spacer.medium};
          border-radius: calc(${Spacer.small} / 2);
          background-color: ${Color.primary};
          color: #fff;
          border: 0;
          padding: ${Spacer.small} ${Spacer.medium};
        `
      },
      {
        "class": "order-form__caption",
        "style": `
          margin-bottom: 0;
        `
      },
      {
        "class": "order-form__star",
        "style": ``
      }
    ]
  }
];