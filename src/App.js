import { useState, useEffect, useCallback, Redirect } from "react";
import Hello from "./Hello";
import Content from "./Content";

import { jokeURL } from "./service/api";

export default function App() {
  const [name, setName] = useState("");
  const [joke, setJoke] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const [newJoke, setNewJoke] = useState(false);

  //const handleSetName = () => {
  //  setName("Valter");
  //};

  const handleSetName = useCallback(
    (nameFunction) => {
      setName("Valter");
      console.log(joke?.value);
    },
    [joke]
  );

  useEffect(() => {
    setIsLoad(true);
    jokeURL.get("random").then((response) => {
      setJoke(response.data);
      setIsLoad(false);
    });
  }, [newJoke]);

  if (isLoad) {
    return (
      <>
        <div>
          <p>Carregando...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Hello name={name} />
      <button onClick={handleSetName}>Clique Aqui</button>
      <Content />
      <hr></hr>
      <button onClick={() => setNewJoke(!newJoke)}>Mudar</button>
      <img src={joke?.icon_url} alt={joke?.value} />
      <h1 style={{ textAlign: "center" }}>{joke?.value}</h1>
    </>
  );
}
