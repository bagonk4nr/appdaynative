import * as React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <nav className='navbar fixed-bottom navbar-expand-lg navbar-light bg-primary'>
        <a className='navbar-brand' href='#'>
          Navbar
        </a>
        <button className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
                 <a className='nav-item nav-link active' href='#'>
                  Home
                 </a>
                 <a className='nav-item nav-link' href='#'>
                  Features
                </a>
                 <a className='nav-item nav-link' href='#'>
                  Price
                </a>
                 <a className='nav-item nav-link' href='#'>
                  About
                </a>
            </div>
        </div>
     </nav>
   );
  }
}

export default Footer;
