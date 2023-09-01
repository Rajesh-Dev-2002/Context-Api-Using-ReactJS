import React, { createContext } from "react";
import ComA from "./ComA";
const data = createContext();
const data1 = createContext();
function App() {
  //1.create,2.provider,3.usecontext
  const name = "Rajesh Kumar";
  const gender = "Male";
 
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ComA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};
export default App;
export {data,data1};
