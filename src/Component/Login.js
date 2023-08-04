import React, {  useState } from "react";
import { database } from "../Firebase/Firebase";
import { get, ref, update } from "firebase/database"
import "../Login.css";
import {  ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Toast.css";

export default function Login() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [data, setdata] = useState(null);
  const [issaving, setIssaving] = useState(false);
  let Lastkey = 0;
  // const Messagecontainer = ({type,content}) =>{
  //   return (
  //     <div className={`message ${type}`}>
  //       <p>{content}</p>
  //     </div>
  //   )
  // }
  const ValidateData = async () => {
    await get(ref(database, "Userentry/")).then((snapshot) => {
      const data = snapshot.val();
      if (data !== undefined && data !== null) {
        const key = Object.keys(data);
        for (let index = 0; index < key.length; index++) {
          const Keyarray = key[index];
          if (Keyarray !== "Lastkey") {
            const usermail = data[Keyarray]["Email"];
            const userpass = data[Keyarray]["Password"];

            if (usermail === email) {
              toast.warning("Email is Already Exists");
              return;
            }
            if (userpass === password) {
              toast.warning("Password is Already Exists");
              return;
            }
          }
        }
      } else {
        handleSave();
        return;
      }
      handleSave();
    });
  };

  const handleSave = async () => {
    setIssaving(true);
    setTimeout(() => {
      setIssaving(false);
    }, 3000);
    if (name === "") {
      toast.error("Name Required");
      return;
    }
    if (email === "") {
      toast.error("Email Required");
      return;
    }
    if (password === "") {
      toast.error("Password Required");
      return;
    }
    await get(ref(database, "Userentry/Lastkey")).then((snapshot) => {
      const data = snapshot.val();
      Lastkey = data + 1;
    });
    await update(ref(database, "Userentry/" + Lastkey), {
      Name: name,
      Email: email,
      Password: password,
    });
    await update(ref(database, "Userentry/"), { Lastkey: Lastkey });
    toast.success("Data saved Successfully");
    setname("");
    setemail("");
    setpassword("");
  };
  // useEffect(() => {
  //   const readdata = async () => {
  //     await get(ref(database, "Userentry")).then((snapshot) => {
  //       const datasnapshot = snapshot.val();
  //       setdata(datasnapshot);
  //     });
  //   };
  //   readdata();
  // }, []);
  // const Remove = () => {
  //   const del = ref(database, "Userentry/");
  //   remove(del).then(() => {
  //     toast.success("Data Deleted Successfully", {
  //       theme: "colored",
  //       delay: 1000,
  //     });
  //   });
  // };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        transition={Zoom}
        draggable
        pauseOnHover
        theme="light"
        className="toastvalue"
      />
      {/* <Messagecontainer type='success' content='data saved'/> */}
      <div className="container">
        <h1 className="haed">Login</h1>
        <div className="container-label">
          <label htmlFor="name  " className="label">
            Name
          </label>
        </div>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          name="name"
          placeholder="Enter your name"
          id="name"
        />
        <br />
        <div className="container-label">
          <label htmlFor="email" className="label">
            Email
          </label>
        </div>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter your email"
          id="email"
        />
        <br />
        <div className="container-label">
          <label htmlFor="password" className="label">
            Password
          </label>
        </div>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          name="password"
          placeholder="Enter your password"
          id="password"
        />
        <br />
        <button
          type="submit"
          className={`sideeffect ${issaving ? "login" : ""}`}
          onClick={ValidateData}
        >
          {issaving ? "Login..." : "Login"}
        </button>

        {/* <button type="submit" onClick={Remove}>
          Remove
        </button> */}
        {/* <p>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</p> */}
      </div>
    </>
  );
}
