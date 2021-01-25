import * as React from 'react';
import { Link } from "react-router-dom";
import {
  withRouter
} from "react-router-dom";

const todo = function(msg) {
    console.log(' %c %s %s %s', 'color: yellow; background-color: black;', '–', msg, '–');
}

class Index extends React.Component {

    render() {
      return (
        <div className='rbodycorners' >
          <button type="button" className="btn btn-primary" data-toggle="dropdown">User</button>
          <ul className="dropdown-menu">
              <li>
                <Link to={{
                    pathname: '/',
                    state: {
                        routes: 'User',
                        data: 'user',
                    }
                  }}
                  // onClick={() => {window.location.href="/"}}
                >
                User<span className="glyphicon glyphicon-cog pull-right"></span>
                </Link>
              </li>
              <li className="divider"></li>
              <li>
                <Link to={{
                    pathname: '/',
                    state: {
                        routes: 'User',
                        data: 'fprofile',
                    }
                  }}
                  // onClick={() => {window.location.href="/"}}
                >
                Profile
                <span className="glyphicon glyphicon-cog pull-right"></span>
                </Link>
              </li>
              <li className="divider"></li>
          </ul>
        </div>
     );
   }
}

export default withRouter(Index);
