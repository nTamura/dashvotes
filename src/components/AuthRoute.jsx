import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const AuthRoute = (props) => {
  const {
    component: Component,
    isLoggedIn = false,
    ...rest
  } = props;

  return (
    <Route {...rest} render={(props) => {
      {(isLoggedIn) 
        ? <Component {...props} /> 
        : <Redirect to={{pathname: '/register'}} />
      }
    }} />
  );
}
// function AuthRoute (props) {
//   const {
//     component: Component,
//     isLoggedIn = false,
//     ...restProps
//   } = props;

//   return (
//     <Route {...restProps}
//       render={(props) => {
//           return 
//           {(isLoggedIn) ? 
//             <Component {...props} /> :
//             <Redirect to={{pathname: '/register'}} />
//           }
//         }
//       }
//     />
//   );
// }

export default AuthRoute;