import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Loading from '../component/Loading';
import ShowGIt from '../component/ShowGIt';


class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:0
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({wait:1});
    console.log(this.refs.getName.getValue());
    let value=this.refs.getName.getValue();
    this.refs.form.reset();
    axios
    .get(`https://api.github.com/users/${value}`)
    .then(res => this.setState({data:res.data,wait:2}) )
    .catch(error => {alert(error);this.setState({wait:0})})
  }
  render () {
    let show= this.state.wait==0 ? null:
        this.state.wait==1 ? <Loading /> : <ShowGIt gitInfo={this.state.data} />
    return(
      <div className="about-wrap">
      <div className="git-card">
      <h2>git a Card</h2>
      <form className="about-form" ref="form" onSubmit={this.handleSubmit.bind(this)}>
      <TextField hintText="github username" style={{width:"60%",borderColor:"#E91E63"}} ref='getName' />
       <RaisedButton label="search" secondary={true} style={{marginLeft:"10px"}} onClick={this.handleSubmit.bind(this)} />
       {show}
       </form>
      </div>
      </div>
    )
  }
}

export default About;
