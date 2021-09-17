/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/images/footer-logo.png';
import FooterBg from 'assets/images/footer-bg.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <Box
            sx={{
              width: [
                '120px',
                '120px',
                '120px',
                '120px',
                '120px',
                '150px',
                '150px',
                '200px',
              ],
            }}
          >
            <Link path="/">
              <Image src={FooterLogo} alt="Logo" />
            </Link>
          </Box>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                <Link
                  path={path}
                  key={i}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundImage: [`url(${FooterBg})`],
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#000',
    zIndex: 1,
    footerBottomArea: {
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, '330px'],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      '@media(max-width:800px)': {
        flexDirection: 'column',
        alignItems: 'center',
        pt: [7, null, '100px'],
        height: '300px',
      },
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '18px'],
      color: 'text',
      fontWeight: '900',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
