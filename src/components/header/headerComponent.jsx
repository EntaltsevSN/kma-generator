import React from 'react';

import Logo from '../../logo.svg';

import Header from './components/header';
import HeaderLogo from './components/headerLogo';
import HeaderTitle from './components/headerTitle';
import HeaderLink from './components/headerLink';

function HeaderComponent(props) {
  return <Header>
    <HeaderLogo src={Logo} />
    <HeaderTitle>KMA Генератор</HeaderTitle>
    <HeaderLink href="/form">Форма</HeaderLink>
  </Header>
}

export default HeaderComponent;