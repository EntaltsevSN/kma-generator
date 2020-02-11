import React, { Component } from "react";
import { Helmet } from "react-helmet";

import HeaderComponent from "./components/header/headerComponent";
import Layout from "./components/layout/layout";
import Content from "./components/layout/content";
import Container from "./components/layout/container";
import Row from "./components/grid/row";
import Column from "./components/grid/column";
import FormComponent from "./components/form/formComponent";
import OrderFormComponent from "./components/orderForm/orderFormComponent";
import CodeComponent from './components/code/codeComponent';
import GlobalStyle from './components/common/globalStyle';

import { Languages } from './config/languages';
import { Styles } from './config/styles';

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>KMA Генератор. Форма для преленда</title>
            </Helmet>
            ...
        </div>
    );
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'language': Languages[0].value,
      'style': Styles[0].value,
      'prices': true,
      'free': false,
      'caption': false,
      'captionText': '',
      'star': false
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(prop, value) {
    this.setState({ [prop]: value });
  }

  render() {
    console.log(this.state);
    return(
      <Layout>
        <Application />
        <GlobalStyle />
        <HeaderComponent />
        <Content>
          <Container>
            <Row>
              <Column sm="6">
                <FormComponent state={this.state} updateState={this.updateState} />
              </Column>
              <Column sm="6">
                <OrderFormComponent state={this.state} />
                <CodeComponent state={this.state} />
              </Column>
            </Row>
          </Container>
        </Content>
      </Layout>
    );
  }
}