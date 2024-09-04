import './style.css'


function EditorsList (props) {
  return (
    <div className="editors-list">
      <h5 style={{color:"white"}}>In room users</h5>
      {props.users.map((user) => (
        <p key={user.name} style={{color : user.color}}>
          {`${user.name}`}
        </p>
      ))}
    </div>
  )
}

export default EditorsList;