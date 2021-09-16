/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import illustration from 'assets/images/banner-illustration.png';
import LogoImage from 'assets/images/logo_light.png';
import BannerBG from 'assets/images/hero_bg.png';

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Image src={LogoImage} alt="illustration" sx={styles.image} />
          <SectionHeading
            title="Next-Gen Gaming for Everyone"
            description="Stake & earn real money when you play games with your friends and
            pals."
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  image: {
    width: 135,
    pb: 35,
  },
  section: {
    overflowX: 'hidden',
    backgroundImage: [`url(${BannerBG})`],
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#000',
    pt: 80,
    zIndex: 0,
    height: 750,
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
};
