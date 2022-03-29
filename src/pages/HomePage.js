import HomeMainBanner from '../components/HomeMainBanner';
import HomeTopFeature from '../components/HomeTopFeature';
import HomeAbout from '../components/HomeAbout';
import HomeFeatureBanner from '../components/HomeFeatureBanner';
import HomeConsultation from '../components/HomeConsultation';
import HomePartners from '../components/HomePartners';
import useAirtableData from '../utils/useAirtableData';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const airtableData = useSelector(({ airtableReducer }) => airtableReducer.Home)
  useAirtableData('Home', 'FETCH_HOME', airtableData);
  const bannerData = airtableData.find(({ fields: { id = '' } } = {}) => id === 'banner');
  const featuresData = airtableData.find(({ fields: { id = '' } } = {}) => id === 'features');
  const aboutData = airtableData.find(({ fields: { id = '' } } = {}) => id === 'about');
  const featureBannerData = airtableData.find(({ fields: { id = '' } } = {}) => id === 'feature-banner');
  const consultationData = airtableData.find(({ fields: { id = '' } } = {}) => id === 'consultation');
  const partnersData = airtableData.find(({ fields: { id = '' } } = {}) => id === 'partners');

  return (
    <>
      <HomeMainBanner {...{ bannerData }} />
      <div>
        <HomeTopFeature {...{ featuresData }} />
        <HomeAbout {...{ aboutData }} />
        <HomeFeatureBanner {...{ featureBannerData }} />
        <HomeConsultation {...{ consultationData }} />
        <HomePartners {...{ partnersData }} />
      </div>
    </>
  )
}

export default HomePage;
