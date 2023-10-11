import { useNavigate } from 'react-router-dom';
import Container from 'components/Container/Container';
import css from './Home.module.css';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className={css.home}>
        <Container>
          <div className={css.wrapper}>
            <h1 className={css.title}>
              Rent a car <br /> in Ukraine
            </h1>

            <div className={css.services}>
              <p className={css.subTitle}>
                RentalCar offers the following <br /> services:
              </p>

              <ul className={css.servicesList}>
                <li className={css.servicesListItem}>
                  <p>Car rental</p>
                </li>
                <li className={css.servicesListItem}>
                  <p>Quick registration</p>
                </li>
                <li className={css.servicesListItem}>
                  <p>Regular technical inspection</p>
                </li>
                <li className={css.servicesListItem}>
                  <p>24h support</p>
                </li>
                <li className={css.servicesListItem}>
                  <p>Child car seat</p>
                </li>
              </ul>

              <button
                className={css.button}
                onClick={() => {
                  navigate('/catalog');
                }}
              >
                View all cars
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
