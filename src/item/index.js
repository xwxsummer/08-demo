import React from 'react';

class Item extends React.Component {

  render () {
    console.log(this.props)
    let content = this.props.params.title==1 ? "这个是第一个页面":
        this.props.params.title==2 ? "这个是第二个页面":
        this.props.params.title==3 ? "这个是第三个页面":"这是第N个页面";
    return(
      <div>
        {content}
      </div>

    )
  }
}

export default Item;