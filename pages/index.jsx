/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Ads = dynamic(
  () => import('../src/components/Ads'),
  {
    loading: () => <p>Loading Ads...</p>
  }
)

export default ({ content: { title } }) => {
  return (
  <div sx={{ height: `calc{ (100vh - 60px) }` }}>
    <div sx={{ variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%' }}>
        <h1 sx={{ fontSize: 8, my: 0, lineHeight: 1.1 }}>{ title }</h1>
        <Ads/>
    </div>
  </div>
) };

export function getStaticProps() {
  return {
    props: {
      content: {
        title: 'This is my really nice app'
      }
    }
  }
}