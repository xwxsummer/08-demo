import React from 'react';
import NavHeader from './component/navHeader';
import NavFooter from './component/navFooter';
import LeftNav from './component/LeftNav';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {
  getChildContext(){
    return{muiTheme:getMuiTheme()}
  }
  constructor(){
    super();
    this.state={
      title:"Home",
      showLeftNav:false
    }
  }
  componentWillMount(){
    this.setTitle();
    this.setNavBar();
  }
  setNavBar(){
    this.setState({
      showLeftNav:window.innerWidth>760 ?true:false
    })
  }
  componentDidMount(){
    window.onresize =this.setNavBar.bind(this);
  }
  componentWillReceiveProps(){
    this.setTitle()
  }
  setTitle(){
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
        {
          this.state.showLeftNav ? <LeftNav title={this.state.title} /> : <NavHeader title={this.state.title} />
        }
        <div className="main">
          {this.props.children}
        </div>
        {this.state.showLeftNav ? null:<NavFooter />}

      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme:React.PropTypes.object
}
export default App;
