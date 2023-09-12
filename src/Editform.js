import { useEffect, useState } from "react"


const Editform=(props)=>{

    const [user,setUser]=useState(props.currentUser)


    useEffect(()=>{
        setUser(props.currentUser)
   },[props])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({...user,[name]:value})

    }



    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if (!user.name || !user.email || !user.phone) return
                props.updateUser(user.id,user);
                // console.log(event)    
            }
        } >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name="name" value={user.name} className="form-control" onChange={handleInputChange} id="exampleInputEmail1" aria-describedby="emailHelp" />


                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" onChange={handleInputChange} id="exampleInputEmail1" value={user.email} aria-describedby="emailHelp" />


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="number" value={user.phone} name="phone" onChange={handleInputChange} className="form-control" id="exampleInputPassword1" />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button"  onClick={()=>{props.setEditing(false)}} className="btn btn-primary">Cancel</button>
            </div>
        </form>
    )
}
export default Editform