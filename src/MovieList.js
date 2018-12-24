import React, { Component } from 'react';
import UserList from './UserList';

class MovieList extends Component {
  
  render(){
    const {usersByMovie, users, movies} = this.props;
    return(
      <div style={{ marginTop: 60 }}>
      {Object.keys(movies).map((key,index) => {
        const movieID = movies[key].id;
        let usersWhoLiked = [];
        if (usersByMovie[movieID]){
          usersByMovie[movieID].forEach((user) => {
            usersWhoLiked.push(users[user].name);
          });
        } else {
          console.log('não tem likes');
        }
        return (
        <div>
        	<h2>{movies[key].name}</h2>
			<UserList usersWhoLiked={usersWhoLiked} />
		</div>
		)
		})}
		
      </div>
    )
  }
}

export default MovieList;