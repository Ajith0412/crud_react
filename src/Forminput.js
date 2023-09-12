import { useState } from "react";


const Forminput=(props)=>{

    const initialState={id:null,name:"",email:"",phone:""};

    const [user,setUser]=useState(initialState);

    const handleInputChange=(event)=>{
        const{name,value}=event.target;

        setUser({...user,[name]:value})
    }



    return(
        <form onSubmit={
            event => {
                event.preventDefault();
                if (!user.name || !user.email || !user.phone) return
                props.addUser(user);
                setUser(initialState);
            }
        } >
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" name="name" value={user.name} className="form-control" onChange={handleInputChange}  aria-describedby="emailHelp" />


                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" onChange={handleInputChange}  value={user.email} aria-describedby="emailHelp" />


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text"   name="phone" value={user.phone} onChange={handleInputChange} className="form-control" />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )

}

export default Forminput