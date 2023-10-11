import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import closeModalIcon from '../../images/x.svg';
import css from './Model.module.css';

function Modal({ onClose, itemId }) {
  const items = useSelector(selectCars);

  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    } = items.find(item => item.id === itemId);
    
    const conditionsArray = rentalConditions.split('\n');

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const handleCloseClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={handleCloseClick}>
      <div className={css.modal}>
        <button onClick={() => onClose()} className={css.closeModalIcon}>
          <img src={closeModalIcon} alt="Close modal icon" />
        </button>

        <div className={css.modalWrapper}>
          <div className={css.container}>
            <img src={img} alt={make} className={css.img} />
          </div>

          <div className={css.info}>
            <p className={css.carInfo}>
              {make}
              <span className={css.model}> {model}, </span>
              {year}
            </p>

            <div className={css.carDescription}>
              <p className={css.carPrimaryDescription}>{`${
                address.split(',')[1]
              } | ${
                address.split(',')[2]
              } | Id: ${id} | Year: ${year} | Type: ${type}`}</p>
              <p
                className={css.carSecondaryDescription}
              >{`Fuel Consumption: ${fuelConsumption} | Engine Size: ${engineSize}`}</p>
            </div>

            <p className={css.description}>{description}</p>
          </div>

          <div className={css.secondCarDescription}>
            <p className={css.firstSubTitle}>
              Accessories and functionalities:
            </p>
            <p
              className={css.carPrimaryDescription}
            >{`${accessories[0]} | ${accessories[1]} | ${accessories[2]}`}</p>
            <p
              className={css.carSecondaryDescription}
            >{`${functionalities[0]} | ${functionalities[1]} | ${functionalities[2]}`}</p>
          </div>

          <div className={css.thirdCarDescription}>
            <p className={css.rentalConditions}>Rental Conditions:</p>
            <ul className={css.conditionsList}>
              <li className={css.conditionsListItem}>
                <p>{conditionsArray[0]}</p>
              </li>
              <li className={css.conditionsListItem}>
                <p>{conditionsArray[1]}</p>
              </li>
              <li className={css.conditionsListItem}>
                <p>{conditionsArray[2]}</p>
              </li>
              <li className={css.conditionsListItem}>
                <p>
                  {`Mileage: `}
                  <span className={css.activeColor}>{mileage}</span>
                </p>
              </li>
              <li className={css.conditionsListItem}>
                <p>
                  {`Price: `}
                  <span className={css.activeColor}>{rentalPrice}</span>
                </p>
              </li>
            </ul>
          </div>

          <button className={css.rentalCar}>
            <a href="tel:+380730000000" className={css.rentalCarLink}>
              Rental car
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;