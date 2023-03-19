import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types";
import { getAllSubs } from "./services/getAllSubs";

interface AppStates{
  subs: Sub[],
  newSubs: number
}
/* const initial_state = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Moderador",
  },
  {
    nick: "PEPITO",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  }
] */
function App() {
  const [subs, setSubs] = useState<AppStates['subs']>([]);
  useEffect(()=>{
    //setSubs(initial_state)
    getAllSubs().then(setSubs)    
  }, [])

  const divRef = useRef<HTMLDivElement>(null)

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }
  return (
    <div className="App" ref={divRef}>
      <h1>Midi subs</h1>
      <div id="container">
        <List subs={subs} />
        <Form onNewSub={handleNewSub}></Form>
      </div>
    </div>
  );
}

export default App;
