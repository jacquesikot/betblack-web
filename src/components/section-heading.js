/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import { alpha } from '@theme-ui/color';

const SectionHeading = ({ title, description, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      <h1 className="primary-title">Next-Gen Gaming for Everyone</h1>
      <p className="primary-subheading">
        Stake & earn real money when you play games with your friends and pals.
      </p>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: 'center',
    maxWidth: 1500,
    margin: ['0 auto 60px'],
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    fontFamily: 'heading',
    fontWeight: 700,
    fontSize: [5, null, null, 26, null, 30, 9],
    lineHeight: [1.33, 1.33, 1.48],
    letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
    },
    // color: (t) => `
    //   linear-gradient(
    //     45deg,
    //     ${t.colors.primary},
    //     ${t.colors.secondary}
    //   )
    // `,
  },
  description: {
    color: '#ffff',
    fontSize: [4, null, null, 6],
    lineHeight: [1.58, 1.58, 1.58, 1.5],
    maxWidth: ['none', 'none', 'none', 'none', 550],
    margin: '15px auto 0',
  },
};
