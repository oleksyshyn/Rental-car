import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import css from './Header.module.css';

const Header = () => {
    return (
      <div className={css.headerWrapper}>
        <Container>
          <div className={css.header}>
            <Link to="/" className={css.logo}>
              RentalCar
            </Link>

            <ul className={css.nav}>
              <li className={css.navItem}>
                <NavLink to="/" className={css.navLink}>
                  Home
                </NavLink>
              </li>
              <li className={css.navItem}>
                <NavLink to="/catalog" className={css.navLink}>
                  Catalog
                </NavLink>
              </li>
              <li className={css.navItem}>
                <NavLink to="/favorites" className={css.navLink}>
                  Favorites
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    );
};

export default Header;
