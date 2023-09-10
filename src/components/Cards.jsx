import Card from './Card';

export default function Cards(props) {
   
   return <div>
      {props.characters.map((elemento)=> <Card 
      key={elemento.id}
      id={elemento.id}
      name={elemento.name}
      status={elemento.status}
      species={elemento.species}
      gender={elemento.gender}
      origin={elemento.origin.name}
      image={elemento.image}
      onClose={props.onClose}
      />)}
   </div>;
}
