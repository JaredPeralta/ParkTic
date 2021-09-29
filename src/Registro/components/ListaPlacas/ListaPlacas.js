import ListGroup from 'react-bootstrap/ListGroup';
import Placa from "./Placa";

const ListaPlacas = ({placas}) => {
    return(
        <ListGroup className="text-center">
            {placas.map((placa) => (
                <Placa placa={placa}/>
            ))}
        </ListGroup>
    );
}

export default ListaPlacas


