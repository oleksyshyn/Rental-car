import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addToFavorite, deleteFromFavorite } from 'redux/favoritesSlice';
import Modal from 'components/Modal/Model';
import favoriteIcon from '../../images/normal.svg';
import activeIcon from '../../images/active.svg';
import css from './CarsListItem.module.css';

function CarsListItem({
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
}) {
  const favorites = useSelector(selectFavorites);
  const [isShowModal, setIsShowModal] = useState(false);

  const dispatch = useDispatch();

  const addFavoriteCarHandler = id => {
    dispatch(addToFavorite(id));
  };

  const deleteFavoriteCarHandler = id => {
    dispatch(deleteFromFavorite(id));
  };

  const toggleModal = () => setIsShowModal(prev => !prev);

  return (
    <>
      <div>
        <div className={css.container}>
          {favorites.includes(id) ? (
            <img
              className={css.favoriteToggle}
              src={activeIcon}
              alt="Active favorite icon"
              onClick={() => deleteFavoriteCarHandler(id)}
            />
          ) : (
            <img
              className={css.favoriteToggle}
              src={favoriteIcon}
              alt="Favorite icon"
              onClick={() => addFavoriteCarHandler(id)}
            />
          )}
          <img src={img} alt={make} className={css.img} />
        </div>

        <div className={css.carInfo}>
          <p>
            {make}
            <span className={css.model}> {model}, </span>
            {year}
          </p>
          <p className={css.contact}>{rentalPrice}</p>
        </div>

        <div className={css.description}>
          <p>{`${address.split(',')[1]} | ${
            address.split(',')[2]
          } | ${rentalCompany}`}</p>
          <p>{`${type} | ${model} | ${mileage} | ${accessories[0]}`}</p>
        </div>
      </div>

      <button className={css.LearnMoreBtn} onClick={toggleModal}>
        Learn more
      </button>
      {isShowModal && <Modal onClose={toggleModal} itemId={id} />}
    </>
  );
}

export default CarsListItem;