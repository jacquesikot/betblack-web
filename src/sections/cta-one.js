import { Box, Text, Flex, Image, Container } from 'theme-ui';
import React from 'react';
import { Link, ExtLink } from 'components/link';
import BlockTitle from 'components/block-title';
import ctaTwoImage from 'assets/images/img-1.png';

const CtaOne = () => {
  return (
    <Box as="section" sx={styles.ctaTwo}>
      <Container>
        <Flex sx={styles.ctaTwo.row}>
          <Box sx={styles.ctaTwo.col}>
            <Image
              src={ctaTwoImage}
              sx={styles.ctaTwo.img}
              alt="cta two image"
            />
          </Box>
          <Box sx={styles.ctaTwo.col}>
            <Box sx={styles.ctaTwo.content}>
              <BlockTitle
                sx={styles.ctaTwo.blockTitle}
                tagline=""
                heading={`About BetBlack`}
              />
              <Text as="p" sx={styles.ctaTwo.text}>
                {`BetBlack is an interesting gaming platform that offers you a chance to make real money by using your skills in a ton of challenging minigames.

                  These minigames are simplified versions of well-known titles that are sure to be familiar to most players. In addition to its intelligent and intuitive design, the gameplay of all these games are surprisingly simple to master. 
                  
                  BetBlack has an authentic purpose for online gamers. Play games, Earn and trade virtual goods in the most popular gaming community online.`}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaOne;

const styles = {
  ctaTwo: {
    paddingTop: '80px',
    paddingBottom: '100px',
    '@media(min-width: 1200px)': {
      paddingTop: '100px',
    },
    '@media(max-width:1024px)': {
      paddingBottom: 80,
    },
    row: {
      flexWrap: 'wrap',
    },
    col: {
      flex: '0 0 50%',
      '@media(max-width:1024px)': {
        flex: '0 0 100%',
      },
      marginTop: '40px',
    },
    img: {
      maxWidth: '550px',
      // position: 'relative',
      // right: '100px',
      // bottom: '45px',
      '@media(max-width:1024px)': {
        maxWidth: '100%',
        right: 'auto',
        bottom: 'auto',
      },
    },
    content: {
      marginLeft: '-20px',
      marginTop: '-50px',
      width: '650px',
      '@media(max-width:1024px)': {
        paddingLeft: 0,
        maxWidth: 475,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      },
      '@media(max-width:575px)': {
        maxWidth: '91%',
        marginTop: '0',
      },
    },
    blockTitle: {
      marginBottom: [20, null, null, 30],

      h3: {
        fontSize: ['24px', null, null, '36px', null, '48px'],
        lineHeight: 1.15,
        letterSpacing: ['0', null, null, '0'],
        whiteSpace: ['normal', null, null, null, null, 'pre-line'],
      },
    },
    text: {
      fontFamily: 'Circular Std Book',
      fontSize: [20, null, null, 22],
      lineHeight: 2,
      color: 'white',
      marginBottom: 25,
      mb: [20, null, null, null, null],
      whiteSpace: ['normal', null, null, null, 'pre-line'],
    },
  },
};
