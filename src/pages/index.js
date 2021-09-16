/** @jsxRuntime classic */
/** @jsx jsx */
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';
import mybanner from 'sections/myBanner';
import AppStoreImg from 'assets/images/app_store.png';
import BG from 'assets/images/gradient-bg.png';
import MainBG from 'assets/images/main-bg.png';
import Img1 from 'assets/images/img-1.png';
import { jsx, Box } from 'theme-ui';
import InfoSection from 'sections/InfoSection';
import CtaOne from 'sections/cta-one';
import CtaTwo from 'sections/cta-two';
import ColorBg from 'assets/images/color_patch_bg.png';

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
          }}
          className="main-content"
        >
          <CtaOne />

          <CtaTwo />

          <WhyUs />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
