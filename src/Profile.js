
import React, {Component} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
class Profile extends Component {
    render(){
        const { user, isAuthenticated } = this.props.auth0;
        return(
/* TODO: render information about logged in user */
            <>
            {isAuthenticated && <div>Hello {user.name}</div>}
            {isAuthenticated && <div>E-mail : {user.email}</div>}
            {console.log(user)}
            {isAuthenticated && <img src="https://lh3.googleusercontent.com/a/AATXAJwEfydiTcx6mT6OLelZ3l-J_RrQRYXUPbSq9Xir=s96-c" alt='img' />}
            </>
          ) 
    }
}
export default withAuth0(Profile);
