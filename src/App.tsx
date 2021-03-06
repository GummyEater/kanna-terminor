import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
} from './redux/Counter/counter.actions';
import RootReducer from './redux/rootReducer';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Tab 1</Menu.Item>
            <Menu.Item key="2">Tab 2</Menu.Item>
            <Menu.Item key="3">Tab 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['Directories']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Directories">
                <Menu.Item key="1">~</Menu.Item>
                <Menu.Item key="2">~/usr</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Commands">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="Macros"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>App</Breadcrumb.Item>
              <Breadcrumb.Item>Terminal</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              brandoncasamichana@Brandons-MBP ~ %:
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

function App() {
  // eslint-disable-next-line prefer-const
  // let { count, increaseCounter, decreaseCounter } = props;
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

const mapStateToProps = (state: ReturnType<typeof RootReducer>) => {
  return {
    count: state.counter.count,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
