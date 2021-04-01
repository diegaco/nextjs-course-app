/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider, Container } from 'theme-ui';
import theme from '../theme';
import Nav from '../src/components/Nav';


export default function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav/>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}