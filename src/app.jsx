import React, { Component } from "react";

import HeaderComponent from "./components/header/headerComponent";
import Layout from "./components/layout/layout";
import Content from "./components/layout/content";
import Container from "./components/layout/container";
import Row from "./components/grid/row";
import Column from "./components/grid/column";
import FormComponent from "./components/form/formComponent";
import OrderFormComponent from "./components/orderForm/orderFormComponent";
import CodeComponent from './components/code/codeComponent';

export default class App extends Component {
  render() {
    return(
      <Layout>
        <HeaderComponent />
        <Content>
          <Container>
            <Row>
              <Column>
                <FormComponent />
              </Column>
              <Column>
                <OrderFormComponent />
                <CodeComponent />
              </Column>
            </Row>
          </Container>
        </Content>
      </Layout>
    );
  }
}