import styled from 'styled-components';

import { Spacer, Color } from '../../common/variables';

const FormSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: ${Spacer.medium};

  & > div {
    min-width: calc(${Spacer.big} * 5);

    & > div {
      width: 100%;
      border: 2px solid #ddd;
    }
  }
  & .rc-checkbox {
    & input {
      width: ${Spacer.big};
      height: ${Spacer.big};
      margin: 0;
    }
    
    & .rc-checkbox-inner {
      width: ${Spacer.big};
      height: ${Spacer.big};
      border: 2px solid #ddd;

      &:after {
        width: 7px;
        height: 14px;
        left: 6px;
      }
    } 
    &-checked {
      & .rc-checkbox-inner {
        background-color: transparent;
        border-color: #ddd;
  
        &:after {
          border-color: ${Color.text};
        }
      }
    } 
  }
`;

export default FormSection;