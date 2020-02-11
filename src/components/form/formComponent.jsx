import React from 'react';

import Form from "./components/form";
import FormSection from "./components/formSecion";
import FormLabel from './components/formLabel';
import FormText from './components/formText';
import Select from 'react-select';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';  

import { Sections } from './config/sections';

function FormComponent(props) {
  const isChecked = name => { return { 'checked': (props.state[name]) && true } };

  const getSectionComponent = section => {
    switch(section.type) {
      case 'select':
        return <Select options={section.options} name={section.name} onChange={
          e => props.updateState(section.name, e.value)
        } defaultValue={section.options[0]} />
      case 'checkbox':
        return <Checkbox {...isChecked(section.name)} name={section.name} onChange={
          e => props.updateState(section.name, e.target.checked)
        } />
      case 'text':
        return <FormText name={section.name} onChange={
          e => props.updateState(section.name, e.target.value)
        } value={props.state.value} />
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