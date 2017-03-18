import React from 'react';
import LinkTo from './Link';

const Footer = () => (
  <p>
    Show:
    {' '}
    <LinkTo filter='SHOW_ALL'>
      All
    </LinkTo>
    {', '}
    <LinkTo filter='SHOW_ACTIVE'>
      Active
    </LinkTo>
    {', '}
    <LinkTo filter='SHOW_COMPLETED'>
      Completed
    </LinkTo>
  </p>
);

export default Footer;
