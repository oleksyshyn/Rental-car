import React from 'react';
import { funds } from '../../utils/support-funds';
// import fund1 from '../../images/Fund1.png';

import css from './Sidebar.module.css';

function Sidebar() {
    return (
      <div className={css.sidebar}>
        <h2 className={css.title}>Support Ukraine</h2>
        <ul className={css.fundsList}>
          {funds.map(({ img, url, title }) => (
            <li className={css.fundsListItem} key={title}>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={img} alt={title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Sidebar;
