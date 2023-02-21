/**
 * HOME PAGE
 */

import Banner from '../../components/global/Banner';
import ThumbnailList from '../../components/page-home/ThumbnailList';

export default function Home() {
  return (
    <div>
      <Banner page='home' />
      <ThumbnailList />
    </div>
  );
}
