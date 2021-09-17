/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import Img3 from 'assets/images/slider_1.png';
import Rating from 'assets/images/rating.png';
import ComingSoon from 'assets/images/coming-soon.png';

export default function TabItem() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            image={Rating}
            title="8Ball Pool"
            description="hi"
            description1={`Stake & earn real money when you play games with your friends and pals. Playing with friends is easy: sign and you’ll be able to challenge your friends straight from the game.`}
            type={1}
          />
          <Box
            sx={{
              width: '90%',
              backgroundColor: '#202020',
              height: 2,
              marginTop: -10,
            }}
          />
          <Box
            sx={{
              width: ['30%', '40%', '40%', '40%', '150px'],
              marginBottom: 2,
              marginTop: 5,
            }}
          >
            <Image src={ComingSoon} />
          </Box>
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={Img3} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
    pt: 40,
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 290, 400, 430, null, 480],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    right: [0, 0, 0, -50, -80, -120, -120],
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
};
