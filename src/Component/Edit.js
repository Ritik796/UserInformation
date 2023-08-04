import React, { createContext, useEffect, useState } from "react";
import "../Edit.css"; // Import the CSS file for the component
import { useParams, useNavigate, Link } from "react-router-dom";
import { get, ref, update } from "firebase/database";
import { database } from "../Firebase/Firebase";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Edit.css'

export const FirstName = createContext();
function Edit() {
  // Component logic
  const id = useParams().id;
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const showdata = () => {
    get(ref(database, `Userentry/${id}`)).then((snapshot) => {
      const Snapvalue = snapshot.val();
      setname(Snapvalue.Name);
      setemail(Snapvalue.Email);
      setpassword(Snapvalue.Password);
    });
  };

  useEffect(() => {
    showdata();
    // eslint-disable-next-line
  }, []);

  // const Handlesave = async () => {
  //   if (name === "") {
  //     toast.error("Name Required");
  //     return;
  //   } else if (email === "") {
  //     toast.error("Email Required");
  //     return;
  //   } else if (password === "") {
  //     toast.error("Password Required");
  //     return;
  //   }
  //   await update(ref(database, `Userentry/${id}`), {
  //     Name: name,
  //     Email: email,
  //     Password: password,
  //   });
  //   setname("");
  //   setemail("");
  //   setpassword("");

  // };

  const ValidateData = async () => {
    if (name === "") {
      toast.error("Name Required");
      return;
    } else if (email === "") {
      toast.error("Email Required");
      return;
    } else if (password === "") {
      toast.error("Password Required");
      return;
    }
    // Check if any field is updated and display appropriate toast messages
    await get(ref(database, `Userentry/${id}`)).then((snapshot) => {
      const Snapvalue = snapshot.val();

      if (
        name === Snapvalue.Name &&
        email === Snapvalue.Email &&
        password === Snapvalue.Password
      ) {
        navigate("/view");
        return;
      }
      if (
        name !== Snapvalue.Name &&
        email !== Snapvalue.Email &&
        password !== Snapvalue.Password
      ) {
       setTimeout(() => {
         navigate("/view");
       }, 3000);
        toast.success("Edit Successfully", {
          theme: "dark",
          transition: Zoom,
        });
        return
      }
      if (name !== Snapvalue.Name) {
        toast.success("Name Updated Successfully", {
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/view");
          return;
        }, 3000);
        return;
      }
      if (email !== Snapvalue.Email) {
        toast.success("Email Updated Successfully", {
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/view");
          return;
        }, 3000);
        return;
      }
      if (password !== Snapvalue.Password) {
        toast.success("Password Updated Successfully", {
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/view");
          return;
        }, 3000);
        return;
      }
      setTimeout(() => {
        navigate("/view");
        return;
      }, 3000);
    });

    // Save the updated data
    await update(ref(database, `Userentry/${id}`), {
      Name: name,
      Email: email,
      Password: password,
    });

    // Redirect to the View page
    setname("");
    setemail("");
    setpassword("");
    // setTimeout(() => {
    //   navigate("/view");
    // }, 3000);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} pauseOnHover={true}/>
      <div className="edit-container">
        {/* <Link to="/view">
          <i
            className="fa fa-arrow-left fa-5x"
            style={{
              position: "absolute",
              top: "30px",
              left: "100px",
              fontSize: "20px",
              color: "red",
            }}
          ></i>
        </Link> */}
        <h2>Edit</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          name="name"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          name="password"
          id="password"
        />
        <button type="submit" className="edit" onClick={ValidateData}>
          Save
        </button>
        <Link to="/view">
          <button type="submit" className="edits">Back</button>
        </Link>
      </div>
    </>
  );
}
export default Edit;
