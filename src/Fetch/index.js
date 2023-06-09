import React,{useEffect, useState} from 'react';
import "../APP/App.css";

export default function Fetch() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getApi() {
            let response = await fetch(`/.netlify/functions/get_users`, {
              method: "GET",
            });
            let data = await response.json();
            
       
            const sorted = data.sort((a, b)=> b.score - a.score);
        
           setData(sorted)
                
        }
    
    getApi()
    }, [])
    
    console.log(data);

    
    

  return (
    <div> <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
      </tr>
      </thead>
      {data.map((e)=>
      <tbody key={e._id}>
        <tr>
      <td >{e.name}</td>
      <td>{e.score}</td>
      </tr>
      </tbody>)}
   
    </table></div>
  )
}
