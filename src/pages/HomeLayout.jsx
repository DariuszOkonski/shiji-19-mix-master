import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='loading' />
          </div>
        ) : (
          <Outlet />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
