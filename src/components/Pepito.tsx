import React from 'react';
import { useEffect } from 'react';

export const Pepito = () => {
  useEffect(() => {
    console.log('Hola Mundo desde pepito');
    return () => {
      console.log('Return del useEffect');
    };
  }, []);

  return <div>pepito</div>;
};
