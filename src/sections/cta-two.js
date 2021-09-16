import { Box, Text, Flex, Image, Container } from 'theme-ui';
import React from 'react';
import { Link, ExtLink } from 'components/link';
import BlockTitle from 'components/block-title';
import ctaTwoImage from 'assets/images/img-2.png';

const CtaTwo = () => {
  return (
    <Box as="section" sx={styles.ctaTwo}>
      <Container>
        <Flex sx={styles.ctaTwo.row}>
          <Box sx={styles.ctaTwo.col}>
            <Box sx={styles.ctaTwo.content}>
              <BlockTitle
                type={2}
                sx={styles.ctaTwo.blockTitle}
                tagline=""
                heading={`Roadmap Coming Soon`}
              />
              <Text as="p" sx={styles.ctaTwo.text}>
                {`Stake & earn real money when you play 
                    games with your friends and pals.`}
              </Text>
            </Box>
          </Box>
          <Box sx={styles.ctaTwo.col}>
            <Image
              src={ctaTwoImage}
              sx={styles.ctaTwo.img}
              alt="cta two image"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaTwo;

const styles = {
  ctaTwo: {
    paddingTop: '40px',
    paddingBottom: '70px',
    '@media(min-width: 1200px)': {},
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
      maxWidth: '750px',
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
      marginTop: '150px',
      '@media(max-width:1024px)': {
        paddingLeft: 0,
        maxWidth: 475,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      },
      '@media(max-width:575px)': {
        maxWidth: '91%',
        marginTop: '0px',
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
    },
  },
};
