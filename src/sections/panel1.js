/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Img1 from 'assets/images/img-1.png';

const data = {
  title: 'About BetBlack',
  description: `BetBlack is an interesting gaming platform that offers you a chance to make real money by using your skills in a ton of challenging minigames.

    These minigames are simplified versions of well-known titles that are sure to be familiar to most players. In addition to its intelligent and intuitive design, the gameplay of all these games are surprisingly simple to master. 
    
    BetBlack has an authentic purpose for online gamers. Play games, Earn and trade virtual goods in the most popular gaming community online.`,
  btnName: 'Get Started',
  btnURL: '#',
};

export default function Panel1() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={Img1} alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            descColor="white"
            title={data.title}
            description="hi"
            description1={`BetBlack is an interesting gaming platform that offers you a chance to make real money by using your skills in a ton of challenging minigames.`}
            description2={` These minigames are simplified versions of well-known titles that are sure to be familiar to most players. In addition to its intelligent and intuitive design, the gameplay of all these games are surprisingly simple to master. `}
            description3={` BetBlack has an authentic purpose for online gamers. Play games, Earn and trade virtual goods in the most popular gaming community online.`}
            btnName={data.btnName}
            btnURL={data.btnURL}
            type={2}
          />
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
    pt: 100,
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 550, 580, null, 630],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
};
