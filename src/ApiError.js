import React from 'react'
import { render } from 'react-dom/cjs/react-dom.production.min';
import Helmet from 'react-helmet';

export class ApiError extends React.Component {
  constructor(props) {
    super(props);

  }

render(){
    return(
        <div>
        <Helmet>
        <title>Loading APi</title>
    </Helmet>
    <div className="construction-posts-container">
        <div className="construction-posts-header">
        <span>Api Error</span>
        </div>
        <div className="construction-posts-main">
            <span>Make sure you are connected to the Api if you are not redirected soon</span>
        </div>
       </div>
       </div>
       )
}
}