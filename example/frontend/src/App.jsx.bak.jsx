import { useState } from 'react'
import useAjax from "./hooks/useAjax"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { response, error, loading } = useAjax(
   "https://www.anapioficeandfire.com/api/houses",
   {
     query: {
       page: 1,
       pageSize: 10,
     },
   }
  );
  console.log(response);
  if (loading) {
   return <div className="loading">Loading...</div>
  } 
  if (error) {
   return <div className="error">{JSON.stringify(error)}</div>
  }

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        {response.map((item, index) => {
          return (
            <ul className="datapoint" key={index}>
              <li>{item.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  )



  
}

export default App
