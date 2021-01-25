import * as React from 'react';
import avatar from '../../assets/img/avatar.png';

class Heading extends React.Component {
  render() {
    return (
      <div className='rheadercorners' >
        <img src={avatar} alt='avatar' className='imgavatar' />
      </div>
   );
  }
}

export default Heading;
