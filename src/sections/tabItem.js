import { Box, Text, Flex, Image, Container } from 'theme-ui';
import React from 'react';
import { Link, ExtLink } from 'components/link';
import BlockTitle from 'components/block-title';
import ctaTwoImage from 'assets/images/img-2.png';
import Rating from 'assets/images/rating.png';
import ComingSoon from 'assets/images/coming-soon.png';

const TabItem = ({ title, subtitle, image }) => {
  return (
    <Box as="section" sx={styles.ctaTwo}>
      <Container>
        <Flex sx={styles.ctaTwo.row}>
          <Box sx={styles.ctaTwo.col}>
            <Box sx={styles.ctaTwo.content}>
              <Box
                sx={{
                  width: '200px',
                }}
              >
                <Image src={Rating} />
              </Box>
              <h4 className="rating-title">{title}</h4>
              <h5 className="rating-subtitle">{subtitle}</h5>
              <Box
                sx={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#202020',
                }}
              />
              <Box
                sx={{
                  width: '100px',
                  marginTop: '20px',
                }}
              >
                <Image src={ComingSoon} />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.ctaTwo.colImg}>
            <Image src={image} sx={styles.ctaTwo.img} alt="cta two image" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default TabItem;

const styles = {
  ctaTwo: {
    paddingBottom: '100px',
    '@media(min-width: 1200px)': {},
    '@media(max-width:1024px)': {
      paddingBottom: 80,
    },
    row: {
      flexWrap: 'wrap',
    },
    col: {
      flex: '0 0 35%',
      '@media(max-width:1024px)': {
        flex: '0 0 100%',
      },
      marginTop: '60px',
    },
    colImg: {
      flex: '0 0 65%',
      '@media(max-width:1024px)': {
        flex: '0 0 100%',
      },
      marginTop: '40px',
    },
    img: {
      maxWidth: '1200px',
      // position: 'relative',
      // right: '100px',
      // bottom: '45px',
      '@media(max-width:1024px)': {
        maxWidth: '100%',
        right: 'auto',
        bottom: 'auto',
      },
      '@media(max-width:1024px)': {
        marginLeft: '0px',
      },
    },
    content: {
      marginTop: '80px',
      width: '350px',
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
  },
};
