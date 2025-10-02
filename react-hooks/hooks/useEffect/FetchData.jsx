import React, { useEffect, useState } from "react";

const FetchData = () => {
  //dont forget to initializing array in useState([])
  // this is for case-3 rendering data in webpage
  // const [user, setUser] = useState([]);

  //case-1 and case-2 will work without initializing useState([])
  // const [user, setUser] = useState();

  // useEffect(() =>{
  //   const fetchDataFromApi = async () =>{
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await response.json();
  //     setUser(data);
  //     // console.log(data);
  //   };
  //   fetchDataFromApi();
  // }, [])

  // console.log(user);

  // perfect way to fetch data for production project

  const [users, setUsers] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchData = async() =>{
    //   try{
    //     setLoading(true)
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     if(!response.ok){
    //       throw new Error("Failed to fetch data");
    //     }
    //     const data = await response.json();
    //     setUsers(data);
    //   }catch(err){
    //     setError(err.message);

    //   }finally{
    //     setLoading(false);
    //   }
    // };
    // fetchData();

    // another way to fetch data
    const fetchData = () => {
      
        setLoading(true);

         fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch data");
            }
            
            return res.json();
          })
          .then((data) => {
            setUsers(data);

          }).catch((err) =>{
        setError(err.message);

      }).finally (() => {
        setLoading(false);
      });

    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Data</h1>
      {/* case - 1 */}
      {/* {
        user?.map((usr) =>{
          return(
             <div key={usr.id}>
              <h4>{usr.name}</h4>
              <p>{usr.email}</p>
             </div>
          )
        })
      } */}

      {/* case - 2 */}
      {/* {
        user && user.map((usr) =>{
          return(
            <div key={usr.id}>
              <h3>{usr.name}</h3>
              <p>{usr.email}</p>
              <p>{usr.phone}</p>
            </div>
          )
        })
      } */}

      {/* case - 3 */}
      {/* {
        user.map((usr) =>{
          return(
            <div key={usr.id}>
              <h3>{usr.name}</h3>
              <p>{usr.email}</p>
              <p>{usr.phone}</p>
            </div>
          )
        })
      } */}

      {/* production project */}

      {loading && <p>Loading Data... </p>}
      {error && <p>Error: {error}</p>}

      {!loading &&
        !error &&
        users?.map((usr) => {
          return (
            <div key={usr.id}>
              <h4>{usr.name}</h4>
              <p>{usr.email}</p>
              <p>{usr.phone}</p>
            </div>
          );
        })}
    </div>
  );
};

export default FetchData;
