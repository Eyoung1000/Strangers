import React, { useState, useEffect } from 'react';

function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://strangers-things.herokuapp.com/api/2305-FTB-ET-WEB-PT')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Server says bad response"); // Fixed typo here
      })
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* Use the 'data' state to render your fetched data */}
      {data && (
        <div>
          {/* Render data here */}
        </div>
      )}
    </div>
  );
}

export default Fetch;

//change with lab 8.30.23