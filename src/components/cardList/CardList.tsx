import ActivityCard from '../activityCard/AcitivityCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useRef, MutableRefObject } from 'react';
import CardListContext from '../../context/CardListContext';
import CardListTop from './CardListTop';

function CardList() {
  const { cards, handleClick, page, pageLimit, numCards, windowWidth } =
    useContext(CardListContext);

  const cardListRef = useRef() as MutableRefObject<HTMLInputElement>;
  const styleMobile = {
    width: '95vw',
    height: '80vh',
  };
  const styleDesktop = {
    height: '85vh',
    width: 'max(350px, 30vw)',
  };

  return (
    <div
      className='d-flex flex-column justify-content-between'
      style={windowWidth < 825 ? styleMobile : styleDesktop}
      ref={cardListRef}
    >
      <AnimatePresence mode='popLayout'>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          exit={{
            opacity: 0,
            x: 200,
            transition: { duration: 0.3 },
          }}
        >
          <CardListTop
            handleClick={handleClick}
            page={page + 1}
            pageLimit={pageLimit + 1}
          />
        </motion.div>

        {cards.map(item => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -200 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.45 + 0.15 * (item.id % numCards),
                },
              }}
              exit={{
                opacity: 0,
                x: 200,
                transition: {
                  duration: 0.3,
                  delay: 0.15 * (item.id % numCards),
                },
              }}
            >
              <ActivityCard item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default CardList;
