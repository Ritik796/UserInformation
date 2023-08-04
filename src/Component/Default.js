import React from "react";
// import NoteContext from "./Context";
import { Link } from "react-router-dom";

function Default() {

//   const location = useLocation()
//   console.log(location);
//   useEffect(()=>{
//   },[location])
//   // Use Firstname context to get the value
// const a= useContext(NoteContext)


  return (
    <div>
      {/* <h1 style={{color:a.theme.color}}>My name is  {a.state.name} and i am in class {a.state.class}</h1>
      <p>hash: {location.hash}</p>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>State: {location.state}</p>
      <p>Key: {location.key}</p> */}
      <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
    </div>
  );
}
export default Default;
