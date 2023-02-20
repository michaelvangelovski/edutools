import { useState } from 'react'
import ajax from "./hooks/ajax";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { response, error, loading } = ajax(
    "https://www.anapioficeandfire.com/api/houses",
    {
      query: {
        page: 1,
        pageSize: 10,
      },
    }
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="error">{JSON.stringify(error)}</div>;
  }

  return (
    <div className="App">

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {response.map((data, index) => {
        return (
          <div className="datapoint" key={index}>
            <h3>{data.name}</h3>
            {data.words && <cite>"{data.words}"</cite>}
            {data.coatOfArms && (
              <p>
                <b>Coat of Arms: </b>
                {data.coatOfArms}
              </p>
            )}
          </div>
        );
      })}

    </div>
  )
}

export default App
