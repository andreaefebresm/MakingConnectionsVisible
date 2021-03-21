import React, { useEffect, useRef } from 'react';

import '../scss/style.scss';
import { Link } from 'gatsby';

export default function EndContent({
  links, what, cta,
}) {
  return (
    <div className="container-fluid" style={{ height: '90vh' }}>
      <div className="row">
        <div className="col-10">
          <div className="row">
            <p className="bigText display-2">BECAUSE STORING THIS DATA COMPANIES KNOW:</p>
            <p className="display-4">
              {what}
            </p>
          </div>

        </div>
        <div className="col-12">
          <div className="row row-cols-3">
            {links.map(({ href, text }, i) => <div><div style={{ border: '1px solid black' }}><a href={href} key={i + text}>{text}</a></div></div>)}
          </div>
          <Link to="/useSafely">
            <div className="row pt-5">
              <p className="bigText display-3" style={{ borderTop: '1px solid black' }}>
                {cta}
              </p>
            </div>
          </Link>
          <Link to="/menu">
            <div className="row ">
              <p className="bigText display-3" style={{ borderTop: '1px solid black' }}>explore more</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}