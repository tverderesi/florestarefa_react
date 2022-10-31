import CardList from './cardList/CardList';
import ProfileCard from './profile/ProfileCard';
import { useContext, useEffect, useState } from 'react';
import MobileNavbar from './layout/MobileNavbar';
import Modal from './Login/Modal';
import CardListContext from '../context/CardListContext';

export function ViewPort() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { loading } = useContext(CardListContext);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  return windowWidth > 825 ? (
    <>
      {loading.cards &&
      loading.pageLimit &&
      loading.subjects &&
      loading.activities ? (
        <Modal />
      ) : (
        ''
      )}
      <div
        className='d-flex justify-content-between align-items-start align-self-center justify-self-center'
        style={{ width: '92.5vw' }}
      >
        <ProfileCard
          lvl='3'
          xp='300'
          name='Thomas'
        />
        <CardList />
      </div>
    </>
  ) : (
    <>
      {loading.cards &&
      loading.pageLimit &&
      loading.subjects &&
      loading.activities ? (
        <Modal />
      ) : (
        ''
      )}
      <div className=''>
        <CardList />
        <MobileNavbar />
      </div>
    </>
  );
}
