const Table=(props)=>(
    <table className="table">
  <thead>
    <tr>
      <th scope="col">SI.NO</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>

    {props.user.length>0?(props.user.map((e)=>(

<tr key={e.id}>
<td>{e.id}</td>
<td>{e.name}</td>
<td>{e.email}</td>
<td>{e.phone}</td>
<td> <button className=" btn btn-primary" onClick={()=>props.editRow(e)} >Edit</button></td>
<td><button className="btn btn-danger"  onClick={()=>props.deleteUser(e.id)} >Delete</button></td>
</tr>
    
   

    
    ))):

    <tr colspan={4} >NO Reacord Found</tr>
}

    </tbody>
    </table>
  
)

export default Table;