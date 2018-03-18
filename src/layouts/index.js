import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css'

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Gaja design"
            meta={[
                { name: 'description', content: 'Strona domowa agencji kreatywnej Gaja Design' },
                { name: 'keywords', content: 'poznań, reklama, agencja reklamy, gajzlerowicz, etykiety' },
            ]}
        >
            <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,700" rel="stylesheet" />
        </Helmet>
        <div
            style={{
                margin: '0 auto',
                paddingTop: 0,
            }}
        >
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper
