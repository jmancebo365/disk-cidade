import React, {useState, useEffect} from "react";

export const UsuarioContext = React.createContext();

const UsuarioProvider = (props) => {
    
 const email = "jose@gmail.com";
 const senha = "senha123";


  const [user , setUser] = useState()
  useEffect(() => {
    fetch("/login/"+email+"/"+senha 
    )
      .then(res => res.json())
      .then(user => onLogin(JSON.parse(JSON.stringify(user))));
  }, []);
  console.log(user);

const onLogin = (event) => {

    if(event.length !== 0){
        const newUser = event[0];
        setUser(newUser);
    }
    else{
        setUser(null);
    }
  }

  return (
  <UsuarioContext.Provider value={{ user: user, onLogin: onLogin}} >
      {props.children}
  </UsuarioContext.Provider>
      );
};

export default UsuarioProvider;

      
 