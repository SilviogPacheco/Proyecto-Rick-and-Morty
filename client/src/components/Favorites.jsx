import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknow</option>
      </select>
      {myFavorites.map((elemento) => {
        return (
          <Card
            key={elemento.id}
            id={elemento.id}
            name={elemento.name}
            status={elemento.status}
            species={elemento.species}
            gender={elemento.gender}
            origin={elemento.origin.name}
            image={elemento.image}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
