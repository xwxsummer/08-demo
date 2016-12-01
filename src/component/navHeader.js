import React from 'react';


class NavHeader extends React.Component {

  handleBack(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className='nav-header'>
        <button type="button" onClick={this.handleBack.bind(this)} >
          <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
        </button>

        <h3 className='text-center'>夏婉轩{this.props.title}</h3>

        <button type="button">
          <span className="glyphicon glyphicon-apple" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router:React.PropTypes.object
}
export default NavHeader;
