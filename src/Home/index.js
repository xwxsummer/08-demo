import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends React.Component {
  render () {
    return(
      <div className="home-wrap">
        <div className='home-cover'>
        <div className='home-items'>
          <h3>hello world</h3>
          <p>xwxsummer</p>
            <RaisedButton label="点击进入" secondary={true} />
          </div>
        </div>
      </div>


    )
  }
}

export default Home;
