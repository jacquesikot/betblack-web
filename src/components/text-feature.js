/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, Box, Heading, Text, Button, Link, Image } from 'theme-ui';

export default function TextFeature({
  subTitle,
  title,
  image,
  description,
  description1,
  description2,
  description3,
  descColor,
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
              fontSize: ['12px', 2, null, null, null, '15px', null, 2],
              fontWeight: 400,
              lineHeight: [1.85, null, null, 2, null, '2.2'],
              mb: '30px',
            }}
          >
            {description1}
          </Text>

          <Text
            as="p"
            className="description"
            sx={{
              color: descColor === 'white' ? '#ffff' : '#959595',
              fontSize: ['12px', 2, null, null, null, '15px', null, 2],
              fontWeight: 400,
              lineHeight: [1.85, null, null, 2, null, '2.2'],
              mb: '30px',
            }}
          >
            {description2}
          </Text>

          <Text
            as="p"
            className="description"
            sx={{
              color: descColor === 'white' ? '#ffff' : '#959595',
              fontSize: ['12px', 2, null, null, null, '15px', null, 2],
              fontWeight: 400,
              lineHeight: [1.85, null, null, 2, null, '2.2'],
              mb: '30px',
            }}
          >
            {description3}
          </Text>
        </>
      )}
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
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
      fontSize: ['19px', null, '23px', '25px', '31px', '37px', null, '43px'],
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
    mb: '30px',
  },
};
