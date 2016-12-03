import React from 'react';

var marked = require("marked");


class Item extends React.Component {

  render () {
    console.log(this.props)
    let content = this.props.params.title==1 ? "这个是第一个页面":
        this.props.params.title==2 ? "这个是第二个页面":
        this.props.params.title==3 ? "这个是第三个页面":"这是第N个页面";
    return(
      <div>
        {content}
        {marked('# hihdohdoh')}
        <div dangerouslySetInnerHTML={{__html:marked("# 你好啊")}} />
      </div>
    )
  }
}

export default Item;
