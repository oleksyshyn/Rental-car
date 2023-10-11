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
            display: 'flex',
            paddingTop: '30px',
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
