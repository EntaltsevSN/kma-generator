import styled from 'styled-components';

const OrderFormText = styled.input`
  ${props => props.styles.map(el => (el.class === Object.keys(props)[0] && el.style))}  
`;

export default OrderFormText;