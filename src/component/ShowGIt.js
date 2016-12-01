import React from 'react';

class ShowGIt extends React.Component {
  render () {
      let info = this.props.gitInfo;
      const style = {
          height: 100,
          width: 100,
          margin: 20,
          textAlign: 'center',
          display: 'inline-block',
        };
      const styles = {
        img:{
          width:'100%',
          borderRadius:'50%',
          maxWidth:"130px",
          boxShadow:' rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px'
        }
      }
    return(
      <div>
        <img  src={info.avatar_url} style={styles.img}/>
        <h3>{info.login}</h3>
        <div className="show-git">
        <p>followers<br/>{info.followers+100}</p>
        <p>following<br/>{info.following+100}</p>
        <p>public_repos<br/>{info.public_repos+100}</p>
        </div>
      </div>
    )
  }
}

export default ShowGIt;
