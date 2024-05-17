import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../App';

export default function Result() {
  const { find } = useContext(GlobalContext);
  const [filteredFrutas, setFilteredFrutas] = useState(null);

  const frutas = {
    fruits: [
      { name: 'Manzana' },
      { name: 'Banana' },
      { name: 'Naranja' },
      { name: 'Pera' },
      { name: 'Uva' },
      { name: 'Fresa' },
      { name: 'Piña' },
      { name: 'Melón' },
      { name: 'Sandía' },
      { name: 'Mango' },
      { name: 'Kiwi' },
      { name: 'Cereza' },
      { name: 'Limón' },
      { name: 'Papaya' },
      { name: 'Coco' },
      { name: 'Mandarina' },
      { name: 'Granada' },
      { name: 'Higo' },
      { name: 'Plátano' },
      { name: 'Ciruela' },
      { name: 'Frutilla' },
      { name: 'Durazno' },
      { name: 'Guayaba' },
      { name: 'Frambuesa' },
      { name: 'Lima' },
      { name: 'Pitahaya' },
      { name: 'Carambola' },
      { name: 'Lichi' },
      { name: 'Membrillo' },
      { name: 'Pomelo' },
    ],
  };

  const refreshFruits = (find) => {
    const filteredFrutas = frutas.fruits.filter((item) =>
      item.name.toLowerCase().includes(find.toLowerCase())
    );
    setFilteredFrutas(filteredFrutas);
  };

  useEffect(() => {
    if (find) {
      refreshFruits(find);
    } else {
      setFilteredFrutas(null);
    }
  }, [find]);

  return (
    <>
      <ul>
        {filteredFrutas
          ? filteredFrutas.map((name, index) => (
              <li key={index}>{name.name}</li>
            ))
          : frutas.fruits.map((name, index) => (
              <li key={index}>{name.name}</li>
            ))}
      </ul>
      <button onClick={() => refreshFruits(find)}>Refresh</button>
    </>
  );
}
