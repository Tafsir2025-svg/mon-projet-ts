import React from 'react';

// Définir le type pour les props
interface GreetingProps {
  name: string; // La prop 'name' est de type string
}

// Composant fonctionnel Greeting
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name}!</div>;
};

export default Greeting;
