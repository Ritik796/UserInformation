import React, { useEffect, useState } from "react";
import { database } from "../Firebase/Firebase";
import { get, ref, remove as delet } from "firebase/database";
import { Link } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import"../View.css"

export default function View() {
  const [tabledata, settabeldata] = useState([]);

  useEffect(() => {
    getdata();
    
  });
  const Handleremove = (id, name) => {
    const delref = ref(database, `Userentry/${id}`);
    delet(delref).then(() => {
      toast.success(`${name} is Deleted`);
      // After deletion, fetch the updated data
      getdata();
    });
  };
  const getdata = async () => {
    const dataarray = [];
    await get(ref(database, "Userentry/")).then((snapshot) => {
      const data = snapshot.val();
      if (data !== undefined && data !== null) {
        const key = Object.keys(data);
        for (let index = 0; index < key.length; index++) {
          const Keyarray = key[index];
          if (Keyarray !== "Lastkey") {
            const name = data[Keyarray]["Name"];
            const email = data[Keyarray]["Email"];
            const password = data[Keyarray]["Password"];
            dataarray.push({
              Name: name,
              Email: email,
              Password: password,
              Keyarray,
            });
          }
          settabeldata(dataarray);
        }
      }
    });
  };

 
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
        transition={Slide}
        draggable
        limit={5}
        pauseOnHover
        theme="light"
        className="toastvalue"
      />
      <div>
        <table className="tableStyle">
          {/* ... (existing code) */}
          <thead>
            <tr>
              <th className="thStyle">ID</th>
              <th className="thStyle">Name</th>
              <th className="thStyle">Email</th>
              <th className="thStyle">Password</th>
              <th className="thStyle">Action</th>
            </tr>
          </thead>

          <tbody>
            {tabledata.map((item, index) => {
              return (
                <tr key={index} className="trHoverStyle">
                  <td className="tdStyle">{item.Keyarray}</td>
                  <td className="tdStyle">{item.Name}</td>
                  <td className="tdStyle">{item.Email}</td>
                  <td className="tdStyle">{item.Password}</td>
                  {/* ... (existing code) */}
                  <td className="tdStyle">  
                    <Link to={`/edit/${item.Keyarray}`}>
                      <button type="submit" className="view" style={{width:'80px',textAlign:'center'}}>Edit</button>
                    </Link>
                    {/* Pass a function reference to onClick */}
                    <button
                      type="submit"
                      className="views"
                      style={{width:'100px',textAlign:'center'}}
                      onClick={() => Handleremove(item.Keyarray, item.Name)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <Link to='/login' ><button type="submit" style={{margin:'14px'}}>Loginpage</button></Link> */}
      </div>
    </>
  );
}
