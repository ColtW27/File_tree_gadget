import React, { useState } from 'react';

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

export default Folder;