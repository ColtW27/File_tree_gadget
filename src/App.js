import React from 'react';

function App() {
  return <div>
      
    <Folder name = "Desktop" />
    <Folder name = "Applications" />
    <File name = "dogs.jpeg" />
    <File name = "cats.png" />

    </div>
}


const Folder = (props) => {
  return <h4>{props.name}</h4>
}

const File = (props) => {
    return <div>{props.name}</div>
}


export default App;
