/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, Box, Heading, Text, Button, Link, Image } from 'theme-ui';
import ComingSoon from 'assets/images/coming-soon.png';

export default function TextFeature({
  subTitle,
  title,
  image,
  description,
  description1,
  description2,
  description3,
  descColor,
  comingSoon,
  btnName,
  btnURL = '#',
  type,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        {/* <Text as="p" sx={styles.wrapper.subTitle}>
          {subTitle}
        </Text> */}
        {image && (
          <Box
            sx={{
              width: ['40%', '50%', '50%', '50%', '200px'],
              marginBottom: 2,
            }}
          >
            <Image src={image} />
          </Box>
        )}
        {type === 1 ? (
          <Heading as="h2" sx={styles.wrapper.title}>
            {title}
          </Heading>
        ) : type === 2 ? (
          <h1 className="content-1-heading">{title}</h1>
        ) : (
          <h1 className="content-1-heading-2">{title}</h1>
        )}
      </Box>

      {description && (
        <>
          <Text
            as="p"
            className="description"
            sx={{
              color: descColor === 'white' ? '#ffff' : '#959595',
              fontSize: ['15px', 2, null, null, null, '17px', null, 3],
              fontWeight: 400,
              lineHeight: [1.5, null, null, 2, null, '2.2'],
              mb: '10px',
            }}
          >
            {description1}
          </Text>

          <Text
            as="p"
            className="description"
            sx={{
              color: descColor === 'white' ? '#ffff' : '#959595',
              fontSize: ['15px', 2, null, null, null, '17px', null, 3],
              fontWeight: 400,
              lineHeight: [1.85, null, null, 2, null, '2.2'],
              mb: '10px',
            }}
          >
            {description2}
          </Text>

          <Text
            as="p"
            className="description"
            sx={{
              color: descColor === 'white' ? '#ffff' : '#959595',
              fontSize: ['15px', 2, null, null, null, '17px', null, 3],
              fontWeight: 400,
              lineHeight: [1.85, null, null, 2, null, '2.2'],
              mb: '10px',
            }}
          >
            {description3}
          </Text>
        </>
      )}
      {comingSoon && (
        <>
          <Box sx={styles.line} />

          <Box sx={styles.comingSoon}>
            <Image src={ComingSoon} />
          </Box>
        </>
      )}
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    '@media(max-width:767px)': {
      alignItems: 'center',
    },
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '@media(max-width:767px)': {
      alignItems: 'center',
    },
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: 'primary',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px'],
    },
    title: {
      fontSize: ['23px', null, '23px', '22px', '28px', '34px', null, '40px'],
      color: 'white',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
    },
  },
  description: {
    fontSize: ['12px', 2, null, null, null, '15px', null, 2],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: '#fff',
    mb: '20px',
  },
  line: {
    width: '90%',
    backgroundColor: '#202020',
    height: 2,
  },
  comingSoon: {
    width: ['30%', '40%', '40%', '40%', '150px'],
    marginBottom: 2,
    marginTop: 5,
  },
};
