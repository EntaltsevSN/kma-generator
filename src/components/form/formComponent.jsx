import React from 'react';

import Form from "./components/form";
import FormSection from "./components/formSecion";
import FormLabel from './components/formLabel';
import FormText from './components/formText';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';  

import { Sections } from './config/sections';
import { Languages } from './config/languages';

function FormComponent(props) {
  const getSectionComponent = section => {
    switch(section.type) {
      case 'select':
        switch(section.name) {
          case 'language':
            return <Select options={Languages} name={section.name} />
          default:
            return <Select />
        }
      case 'checkbox':
        return <Checkbox name={section.name} />
      case 'text':
        return <FormText name={section.name} />
      default:
        return <FormText />
    }
  }

  return <Form>
    {
      Sections.map(section => {
        return <FormSection key={section.name}>
          <FormLabel>{section.label}</FormLabel>
            {getSectionComponent(section)}
        </FormSection>
      })
    }
  </Form>
}

export default FormComponent;