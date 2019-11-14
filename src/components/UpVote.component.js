import React, { Component } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../css/UpVote.css';



function PostButton(props){
    let style = {
     
      paddingRight:'1em',
      paddingLeft:'1em',
      backgroundColor:'purple'

    };
    return(
      <button style={style} onClick={() => props.handleClick()}>{props.label}</button>
    );
  }
  
  function PostText(props){
    let style = {
      paddingRight:'1em',
      height:'3em',
    
      paddingLeft:'1em',
      fontSize:'15px',
      backgroundColor:'lightBlue'
    };
    return(
      <div className="PostText" style={style}>{props.text}</div>
    );
  }
  
  function Post(props){
    let style = {
      display:"flex",
     width:80,
     backgroundColor:'lightBlue'
      
  
    };
    return (
      <div className="Posting"style={style}>
        <PostButton label = 'x' handleClick = {props.removeItem}/>
        <PostText className="postVote"text = {props.title} width = "500"/>
        <PostButton label = 'UpVote' handleClick = {props.incrementScore}/>
        <PostText text = {props.score} width = "500" />
        <PostButton label = 'DownVote' handleClick = {props.decrementScore}/>
      <br></br>
      </div>
    );
  }
  
  function PostList(props){
    return (
      <ol>
        {
          props.postList.map((item, index) => (
            <Post  key = {index}
                  title = {item.title}
                  score = {item.score}
                  incrementScore = {() => props.updateScore(index, 1)}
                  decrementScore = {() => props.updateScore(index, -1)}
                  removeItem = {() => props.removeItem(index)}
            />
          ))
        }
      </ol>
    )
  }
  
  class UpVote extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        value: "",
        items : []
      }
    }
    handleChange(event){
      this.setState({value: event.target.value});
    }
    
    addItem(){
      let itemsCopy = this.state.items.slice();
      let truncatedString = this.state.value.substring(0,20);
      itemsCopy.push({"title": truncatedString, "score":0})
      itemsCopy.sort((a,b) => {
        return b.score - a.score;
      })
      this.setState({items:itemsCopy, value:''});
    }
    
    updateScore(index, val){
      let itemsCopy = this.state.items.slice();
      itemsCopy[index].score += val;
      itemsCopy.sort((a,b) => {
        return b.score - a.score;
      })
      this.setState({ items: itemsCopy });
    }
    
    removeItem(index){
      var itemsCopy = this.state.items.slice();
      itemsCopy.splice(index, 1);
      itemsCopy.sort((a, b) => {
        return b.score - a.score;
      });
      this.setState({ items: itemsCopy });
    }
    
    render(){
      return(
        <div className="postVote">
          <input className="voteInput" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <button className= "voteButton"onClick = {() => this.addItem()}>Submit</button>
          <PostList className="postVote"postList = {this.state.items} 
                    updateScore = {this.updateScore.bind(this)}
                    removeItem = {this.removeItem.bind(this)}/>
                    <br></br>
        </div>
      );
    }
  }
  
//   ReactDOM.render(
//     <UpVote />,
//     document.getElementById("root")
//   );

export default UpVote;