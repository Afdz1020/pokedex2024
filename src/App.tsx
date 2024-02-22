<<<<<<< Updated upstream
import { useState, useEffect, useCallback, useReducer } from 'react';
import './App.css';
import { useRef } from 'react';

type ActionReduce = {
  type: string;
  payload?: string;
};

type State = {
  name: string;
  age: number;
};

function reducer(state: State, action: ActionReduce) {
  switch (action.type) {
    case 'incrementar_edad':
      return {
        ...state,
        age: state.age++,
      };
    case 'cambiar_nombre':
      return {
        ...state,
        name: action.payload,
      };
    default: {
      return { name: 'Andres', age: 30 };
    }
  }
}

function App() {
  const data = useRef(null);
  const [count, setCount] = useState(0);
  const [{ name, age }, dispatch] = useReducer(reducer, {
    name: 'Andres',
    age: 30,
  });

  // const pepitoPerez = useMemo(() => {
  //   const data = [{ id: '1', name: 'pepito' }];
  //   return data[0];
  // }, [count]);

  useEffect(() => {
    data.current = { gato: 'felix el gato' };
    console.log('hola mundo');
  }, [count]);

  const incrementar = () => {
    setCount((pepito) => {
      return pepito + 1;
    });
  };

  const decrementar = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  // const decrementar = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  const incrementarEdad = () => {
    dispatch({ type: 'incrementar_edad' });
  };

  const cambiarNombre = () => {
    dispatch({ type: 'cambiar_nombre', payload: 'Sergio' });
  };

  return (
    <>
      <p>
        mi nombre es : {name} y tengo {age}
      </p>

      <button onClick={incrementarEdad}>Incrementar edad</button>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
      {/* <p>El contador es: {count}</p>

      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button> */}
=======
import { useState, useEffect } from 'react';
import './App.css';
import { Pepito } from './components/Pepito';

function App() {
  const [count, setCount] = useState(0);
  const [showPepito, setShowPepito] = useState(false);

  useEffect(() => {
    console.log('useEffect Hook');
    return () => {
      console.log('Return del useEffect');
    };
  }, [count]);

  const incrementar = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementar = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const mostrarPepito = () => setShowPepito((prevPepito) => !prevPepito);

  return (
    <>
      {showPepito ? <Pepito /> : null}
      <p>el contador es: {count}</p>

      <button onClick={incrementar}>Incrementar</button>

      <button onClick={decrementar}>Decrementar</button>

      <button onClick={mostrarPepito}>Mostrar Pepito</button>
>>>>>>> Stashed changes
    </>
  );
}

export default App;
