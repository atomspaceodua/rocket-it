/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Calendar from './calendar.svg';
import Menu from './menu.svg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link to="/">
            <img className={s.menulogo} src={Menu} />
          </Link>
          <Link className={s.brand} to="/">
            <img className={s.calendarlogo} src={Calendar} />
            <span className={s.brandTxt}>Calentask</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
