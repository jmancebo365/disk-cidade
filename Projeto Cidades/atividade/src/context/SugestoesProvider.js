import React, {useState, useEffect} from "react";

export const SugestoesContext = React.createContext();

const SugestoesProvider = (props) => {
  
  const [sugestoes , setSugestoes] = useState()
  useEffect(() => {
    fetch("/sugestoes")
      .then(res => res.json())
      .then(sugestoes => setSugestoes(JSON.parse(JSON.stringify(sugestoes))));
  }, []);
  console.log(sugestoes);

const onSugestoesSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    let newBooks = [...sugestoes,{
      id: sugestoes.length + 1,
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value
    }];
    setSugestoes(newBooks);
  }

  return (
  <SugestoesContext.Provider value={{ sugestoes: sugestoes, onSugestoesSubmit: onSugestoesSubmit}} >
      {props.children}
  </SugestoesContext.Provider>
      );
};

export default SugestoesProvider;

      
 