import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites, selectCars } from 'redux/selectors';
import CarsListItem from 'components/CarsListItem/CarsListItem';
import css from './FavoritesList.module.css';

function FavoritesList() {
    const favorites = useSelector(selectFavorites);
    const items = useSelector(selectCars);
    const favoriteCars = items.filter(item => favorites.includes(item.id));

  return (
    <div className={css.favorites}>
      <ul className={css.favoritesCarsList}>
        {favoriteCars.map(
          ({
            id,
            img,
            make,
            model,
            year,
            rentalPrice,
            address,
            rentalCompany,
            type,
            mileage,
            accessories,
          }) => (
            <li
              className={css.favoritesCarsListItem}
              key={`${id}-${make}-${model}`}
            >
              <CarsListItem
                id={id}
                img={img}
                make={make}
                model={model}
                year={year}
                rentalPrice={rentalPrice}
                address={address}
                rentalCompany={rentalCompany}
                type={type}
                mileage={mileage}
                accessories={accessories}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default FavoritesList;
