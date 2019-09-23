import React, { Component } from 'react';
import UserItem from './UserItem/UserItem'

class Users extends Component {

    state = {
        users:[
            {
                id: '1',
                login: 'vanpelt',
                avatar_url:'https://avatars1.githubusercontent.com/u/17?v=4',
                html_url: 'https://github.com/vanpelt'
            },
            {
                id: '2',
                login: 'brynary',
                avatar_url:'https://avatars0.githubusercontent.com/u/19?v=4',
                html_url: 'https://github.com/brynary'
            },
            {
                id: '3',
                login: 'kevinclark',
                avatar_url:'https://avatars3.githubusercontent.com/u/20?v=4',
                html_url: 'https://github.com/kevinclark'
            },
            {
                id: '4',
                login: 'wayneeseguin',
                avatar_url:'https://avatars0.githubusercontent.com/u/18?v=4',
                html_url: 'https://github.com/wayneeseguin'
            }
        ],

    }

    render() {
        return (
            <div style = {userStyle}>
               {this.state.users.map(user=>(
                   <UserItem key = {user.id} user = {user}>></UserItem>
               ))} 
            </div>
        );
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  };
export default Users;