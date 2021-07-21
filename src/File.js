const File = (props) => {
  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileIconsList = {
    'mp3' : 'file audio outline',
    'mp4' : 'file video outline',
    'png' : 'file image',
    'jpeg' : 'file image outline',
    'txt' : 'pencil alternate',
    'js' : 'node js',
    'rb' : 'gem',
    'py' : 'python',
    'git' : 'github',
  };
  const fileIcon = fileIconsList[fileExtension]

    return <div>
      <i className={`${fileIcon} icon`}></i>
      {name}
    </div>
}

export default File;