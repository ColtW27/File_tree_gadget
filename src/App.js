
import Folder from './Folder';
import File from './File';

function App() {
  return <div>
      
    <Folder name = "Desktop" >
        <Folder name = "Music">
          <File name = "Shine.mp3"/>
          <File name = "Don't Stop Believing.mp4"/>
        </Folder>
          <Folder name = "Coding">
            <File name = "functions.js"/>
            <File name = "retail_methods.rb"/>
            <File name = "calculations.py"/>
            <File name = "modules.git"/>
          </Folder>
          <Folder name = "Notes">
            <File name = "to_do_list.txt"/>
            <File name = "best_practices.txt"/>
            <File name = "invention_ideas.txt"/>
          </Folder>
        <File name = "dogs.jpeg" />
        <File name = "cats.png" />
    </Folder>
    <Folder name = "Applications" >
      <Folder name = "Paint"/>
      <Folder name = "Asteroids"/>
      <Folder name = "Calculator" />
    </Folder>

    </div>
};


export default App;
