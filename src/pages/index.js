/** @jsxRuntime classic */
/** @jsx jsx */
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import AppStoreImg from 'assets/images/app_store.png';
import BG from 'assets/images/gradient-bg.png';
import MainBG from 'assets/images/main-bg.png';
import { jsx, Box } from 'theme-ui';
import Slider from 'components/Slider/Slider';
import Subscribe from 'sections/subscribe';
import Panel1 from 'sections/panel1';
import Panel2 from 'sections/panel2';
import BlueBg from 'assets/images/blue-bg.png';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Next-Gen gaming for everyone"
          description="Stake & earn real money when you play games
          with your friends and pals."
        />
        <Banner />
        <Box
          sx={{
            backgroundImage: [`url(${BG})`],
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000',
            position: 'relative',
          }}
          className="coming-soon"
        >
          <h3 className="coming-soon-title">Coming Soon</h3>
          <div className="app-store-icon">
            <img className="app-store-img" src={AppStoreImg} />
          </div>
        </Box>

        <Box
          sx={{
            backgroundImage: [`url(${MainBG})`],
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000',
            position: 'relative',
            overflowX: 'hidden',
          }}
          className="main-content"
        >
          <Panel1 />

          <Box
            sx={{
              backgroundImage: [`url(${BlueBg})`],
              backgroundPosition: '50% 50%',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Panel2 />
          </Box>

          <Slider />

          <Subscribe />

          <Box sx={{ height: '100px' }} />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
