import styled from 'styled-components';

const OrderFormCaption = styled.p`
  ${props => props.styles.map(el => (el.class === Object.keys(props)[0] && el.style))}
`;

export default OrderFormCaption;