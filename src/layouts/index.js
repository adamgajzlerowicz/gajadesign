import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gaja design"
      meta={[
        { name: 'description', content: 'Strona domowa agencji reklamy Gaja Design' },
        { name: 'keywords', content: 'poznań, reklama, agencja reklamy, gajzlerowicz, etykiety' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
