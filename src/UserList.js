import React, { Component } from 'react';

class UserList extends Component {
  
  
  render(){
    const { usersWhoLiked } = this.props;
    if (usersWhoLiked.length > 0){
      return(
      <div>
      	<p>Liked By:</p>
      	<ul>
        	{usersWhoLiked.map((user) => <li>{user}</li>)}
      	</ul>
      </div>
    )
    } else {
      return(
      <div>
      	<p>None of the current users liked this movie</p>
      </div>
    )
    }
  }
}

export default UserList;