import React, { useState } from 'react';
import './App.css';
import Editform from './Editform';
import Forminput from './Forminput';
import Table from './Table';

function App() {

  const user = [
    { id: "1", name: 'ajith', email: 'ajithgmail.com', phone: '87888787' },
    { id: "2", name: 'anand', email: 'ajithgmail.com', phone: '87847747' },
    { id: "3", name: 'arun', email: 'ajithgmail.com', phone: '8788878787' },]

    const [users, setUser] = useState(user)

  const addUser = (user) => {
    user.id = users.length + 1;

    setUser([...users, user])
  }

  const deleteUser = (id) => {
    setUser(users.filter((user) => id !== user.id))
    setEditing(false);
  }




  const [editing, setEditing] = useState(false);
  const initalFormstate = [{ id: null, name: '', email: '', phone: '' }]

  const [currentUser, setCurrentUser] = useState(initalFormstate)

  const editRow  = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, email: user.email, phone: user.phone })
  }

  const updateUser = (id,updatedUser)=>{
    setEditing(false);
    setUser(users.map((user)=>(user.id===id?updatedUser:user)))
}


  return (
    <div >
      <h2 style={{ textAlign: "center" }}>CRUD </h2>

      <div id='row'>

        <div>
          {editing?
            (<div>  <h4  style={{textAlign:"center"}}>Edit User</h4>

              <Editform setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}/>
            </div>):
            (<div>
              
              <h4  style={{textAlign:"center"}}> ADD User</h4>
          <Forminput addUser={addUser} /> </div>)     
        }
          
        </div>
        <div>
          <h4 style={{textAlign:"center"}}> View User</h4>
          <div className='tab'>
          <Table  deleteUser={deleteUser} editRow={editRow} user={users}/>
          </div>
          
        </div>

      </div>
      </div>


      )

}

      export default App;
