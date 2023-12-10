import axios from "axios";
import { useEffect } from "react";

const BASE_URL = "https://users-crud.academlo.tech";

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData);
   createUser(newUser);
  };
  
  const createUser = (newUser) => {
    console.log(newUser);
    axios
    .post(BASE_URL + "/users/" , newUser)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err.response));
    
  }




  useEffect(() => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="bg-black text-white min-h-screen font-semibold text-lg">
      <h1 className="text-center p-2 font-bold">NEW USER</h1>
      <form  
        onSubmit={handleSubmit} 
        className="max-w-[400px] mx-auto grid gap-2">
        <div className="grid">
          {/* para llamar al input desde otra distancia*/}
          {/*<label htmlFor="f_name">Name</label>
          <input id="f_name" type="text" className="text-black" />*/}
        </div>
        
        
          
          
        <label  className="grid gap-2 ">
          <div className=" flex justify-center">
            <img name="image_url"  className="max-w-[50px]" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />     
          </div>
          
        </label>
        
        <label className="grid gap-2 ">
          <span>Name <span className="text-red-500">*</span></span>
          <input name="first_name" type="text" className="text-black" required />
        </label>

        <label className="grid gap-2">
          <span>Last Name <span className="text-red-500">*</span></span>
          <input name="last_name" type="text" className="text-black" required />
        </label>

        <label className="grid gap-2">
          <span>Email adress <span className="text-red-500">*</span></span>
          <input name="email" type="email" className="text-black" required />
        </label>

        <label className="grid gap-2">
          <span>Pasword <span className="text-red-500">*</span></span>
          <input name="password" type="text" className="text-black" required />
        </label>

        <label className="grid gap-2">
          <span>Birthday</span>
          <input name="birthday" type="date" className="text-black" />
        </label>

        
          <div className="grid gap-2">
            <button className="bg-blue-500 rounded-md mt-2 p-1 hover:bg-blue-700 transition-color">Create User</button>
            <button className="text-sm">or Cancel</button>
          </div>
        
 
       
        
      </form>
    </main>
  );
}

export default App;
 //OTRA OPCIOÓN CON EL CONSOLE.LOG(NEWUSER)
    //const newUser = {
      //first_name: e.target.first_name.value,
      //last_name: e.target.last_name.value,
      //email: e.target.email.value,
      //password: e.target.password.value,
      //birthday: e.target.birthday.value,
      //image_url: e.target.image_url.value
      //console.log(newUser);
   // }
  