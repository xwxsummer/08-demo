import React from 'react';
import axios from 'axios';
var marked = require("marked");
import Loading from '../component/Loading';



class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    console.log(this.props);
    let address=this.props.params.title;

    axios.get(`https://raw.githubusercontent.com/xwxsummer/08-demo/master/data/${address}.md`)
    .then(res =>this.setState({data:res.data}) )
    .catch(err => alert(err))
  }
  render () {
    return(
      <div className="item-wrap">
        {
          this.state.data.length==0 ? <Loading />:
            <div className='post-wrap' dangerouslySetInnerHTML={{__html:marked(this.state.data)}} />
       }
      </div>
    )
  }
}

export default Item;
