import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from './components/form'
function App() {
  const [state, setState] = useState(true)
  return (

    <div>
      <button className="btn btn-primary" onClick={()=> setState(!state)}>Toggle</button>
      {state? <Form></Form> : null}
    </div>
  );
}

export default App;
