import React, { useState } from 'react';

function App() {
  return <div>
      
    <Folder name = "Desktop" >
        <Folder name = "Music">
          <File name = "Shine.mp3"/>
          <File name = "Don't Stop Believing.mp4"/>
        </Folder>
        <File name = "dogs.jpeg" />
        <File name = "cats.png" />

    </ Folder>
    <Folder name = "Applications" />

    </div>
}


const Folder = (props) => {
  const [ isOpen, setIsOpen] = useState(false);
  const {name, children} = props;
  const direction = isOpen ? 'down' : 'right';
  const folderOpen = isOpen ? 'open' : '';
  const handleClick = () => { setIsOpen(!isOpen); }
  return <div>
    <span onClick={handleClick}>
      <i className={`blue folder ${folderOpen} icon`}></i>
      <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{marginLeft: '17px'}}>
      {isOpen ? children : null}
    </div>
    </div>
}

const File = (props) => {
  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileIconsList = {
    'mp3' : 'file audio outline',
    'mp4' : 'file video outline',
    'png' : 'file image',
    'jpeg' : 'file image outline',
    'txt' : 'pencil alternate',
  };
  const fileIcon = fileIconsList[fileExtension]
    return <div>
      <i className={`${fileIcon} icon`}></i>
      {name}
    </div>
}


export default App;
