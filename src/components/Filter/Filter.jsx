import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    
    const form = e.target;
    const brand = form.elements.brand.value.trim();
    const price = form.elements.price.value;
    const mileageFrom = form.elements.mileageFrom.value;
    const mileageTo = form.elements.mileageTo.value;

    if (brand === '' && price === '' && mileageFrom === '' && mileageTo === "") {
      const isFiltered = false;
      dispatch(setFilter({ isFiltered }));
    }
      
    dispatch(setFilter({ brand, price, mileageFrom, mileageTo }));
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmitForm}>
        <label className={css.label}>
          Car brand
          <input
            name="brand"
            placeholder="Enter the text"
            className={css.brandInput}
          />
        </label>

        <label className={css.label}>
          Price / 1 hour
          <input name="price" placeholder="To $" className={css.priceInput} />
        </label>

        <label className={css.label}>
          Car mileage / km
          <div>
            <input
              name="mileageFrom"
              placeholder="From"
              className={css.mileageFromInput}
            />
            <input
              name="mileageTo"
              placeholder="To"
              className={css.mileageToInput}
            />
          </div>
        </label>

        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
    </>
  );
}

export default Filter;
