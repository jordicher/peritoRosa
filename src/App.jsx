import React, { useEffect, useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* import {db} from './firebase' */
import {db} from './firebase'

import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import Comentarios from "./pages/Comentarios";
import Contacto from "./pages/Contacto";
import Principal from "./pages/Principal";
import SobreMi from "./pages/SobreMi";

function App() {

  const [comentarios, setcomentarios] = useState();

  const getComentarios = async () => {

    const comentariosRef = await db.ref("comentarios")
    comentariosRef.on("value", (snapshot) => {
      setcomentarios(snapshot.val());  
    })   
  }


  useEffect(() => {
    getComentarios();
  }, [])
  return (
    <Fragment>
      <Router >

        <Switch>      
          <Route path="/contacto">
            <Contacto comentarios={comentarios} />
          </Route>
          <Route path="/comentarios">
            <Comentarios comentarios={comentarios} />
          </Route>

          <Route path="/sobremi">
            <SobreMi />
          </Route>

          <Route path="/">
            <Principal comentarios={comentarios} />
          </Route>
        
        </Switch>
      </Router>

    </Fragment>

  );
}

export default App;
