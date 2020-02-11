import styled from 'styled-components/macro';

const OrderForm = styled.form`
  ${props => props.styles.map(el => (el.class === Object.keys(props)[0] && el.style))}
`;

export default OrderForm;