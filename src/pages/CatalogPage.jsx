import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/operations';

import Filter from 'components/Filter/Filter';
import CarsList from 'components/CarsList/CarsList';
import Container from 'components/Container/Container';

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Filter />
        <CarsList />
      </Container>
    </>
  );
}

export default CatalogPage;
