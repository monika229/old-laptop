import React from 'react';

const num = [1,2,3,4,5,6];

function App() {
  return (
    <div>
      {num.filter(num => num%2===0).map(filterednum => (<li>
          {filterednum}
        </li>)
      )}
    {num.map(num => <li>{num*10}</li>)}
    </div>
  );
}

export default App;



{num.map(num => <li>{num*10}</li>)}