// Components
import { Layout, Typography } from 'antd';
import { HeaderNav } from 'shared/components/HeaderNav';
import { SearchForm } from 'shared/components/SearchForm';
import { DealsCarousel } from 'shared/components/DealsCarousel';
import { ReusableHead } from 'shared/components/ReusableHead';
import { ReusableFooter } from 'shared/components/ReusableFooter';
import { Deals } from 'shared/components/Deals';

const { Header, Content } = Layout;
const { Title } = Typography;

// Styles
import { HomeSearch, Section, SearchContainer } from 'shared/styles/pages/homepage'

// Hooks
import { useInitialValuesFromQuery } from 'shared/hooks/useInitialValuesFromQuery';



// Main functional component
export default function Home() {

  const initialValues = useInitialValuesFromQuery();

  return (
    <>
      <ReusableHead title='compareKaro' />

      <Layout>
        <Header style={{
          '--color-1': 'deepskyblue',
          '--color-2': 'navy',
          background: `
          linear-gradient(90deg, rgba(17,17,17,1) 24%, rgba(240,252,255,1) 63%, rgba(163,163,163,1) 100%)
    `,
          color: 'white',
          opacity: '0.7'
        }}>
          <HeaderNav />
        </Header>

        <Content style={{ background: '#fff' }}>
          <HomeSearch>
            <SearchContainer>
              <SearchForm
                initialValues={initialValues}
              />
            </SearchContainer>
          </HomeSearch>
          <Section>
            <Title level={2} >Heavens on the earth</Title>
            <DealsCarousel />
          </Section>

        </Content>
        <Deals></Deals>
        <ReusableFooter />
      </Layout>
    </>
  )
}
