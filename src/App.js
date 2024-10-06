import SongCard from './components/SongCard';
import SideBar from './components/SideBar';
import SearchInput from './components/SearchInput';
import { Layout } from 'antd';
import Profile from './components/Profile';
import Logo from './components/Logo';
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Header
        style={{
          padding: 0,
          background: "white",
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Logo />
        <SearchInput />
        <Profile />
      </Header>

      <Layout>

        <SideBar />
        <Content style={{ backgroundColor: "white" }}>
          <div
            style={{
              padding: 24,
              minHeight: 510,
            }}
          >
            <SongCard />
          </div>
          <Footer
            style={{
              textAlign: 'center'
            }}
          >
            Yutenro{new Date().getFullYear()} Created by vippro
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;