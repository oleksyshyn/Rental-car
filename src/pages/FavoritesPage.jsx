import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/operations';

import Container from 'components/Container/Container';
import Sidebar from 'components/Sidebar/Sidebar';
import FavoritesList from 'components/FavoritesList/FavoritesList';

function FavoritePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div
          style={{
            padding: '16px',
            // backgroundColor: 'gray',
          }}
        >
          <Sidebar />
          <FavoritesList />
        </div>
      </Container>
    </>
  );
}

export default FavoritePage;
