import React from 'react';
import NavHeader from './component/navHeader';
import NavFooter from './component/navFooter';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  getChildContext(){
    return{muiTheme:getMuiTheme()}
  }
  constructor(){
    super();
    this.state={
      title:"Home"
    }
  }
  componentWillMount(){
    this.setTitle();
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  setTitle(){
    console.log(this.props);
    this.setState({
      title:this.props.router.isActive('/',true)?'Home':
            this.props.router.isActive('/blog',true)?'Blog':
            this.props.router.isActive('/work',true)?'Work':
            this.props.router.isActive('/about',true)?'About':'Blog'
    })
  }
  render () {
    return(
      <div className="my-wrap">
        <NavHeader title={this.state.title} />
        <div className="main">
          {this.props.children}
        </div>
        <NavFooter />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme:React.PropTypes.object
}
export default App;
