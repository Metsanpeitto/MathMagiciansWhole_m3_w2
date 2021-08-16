// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router basename={process.env.PUBLIC_URL}>
        <Link to="/" activeClassName="active-link" exact>
          Home
        </Link>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
