import React, { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Login</div>;
  }
  return (
   <div>welcome {user.userName}
   <br /> 
        password {user.password}
   </div>
   
  )
}

export default Profile;
