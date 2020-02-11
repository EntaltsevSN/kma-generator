import { Languages } from '../../../config/languages';
import { Styles } from '../../../config/styles';

export const Sections = [
  {
    'label': 'Язык формы',
    'type': 'select',
    'name': 'language',
    'options': Languages
  },
  {
    'label': 'Стиль формы',
    'type': 'select',
    'name': 'style',
    'options': Styles
  },
  {
    'label': 'Показать цены',
    'type': 'checkbox',
    'name': 'prices'
  },
  {
    'label': 'Заменить новую цену на бесплатно',
    'type': 'checkbox',
    'name': 'free'
  },
  {
    'label': 'Показать подпись',
    'type': 'checkbox',
    'name': 'caption'
  },
  {
    'label': 'Текст подписи',
    'type': 'text',
    'name': 'captionText'
  },
  {
    'label': 'Поставить звёздочки',
    'type': 'checkbox',
    'name': 'star'
  }
];