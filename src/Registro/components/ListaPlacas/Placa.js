import ListGroup from 'react-bootstrap/ListGroup';

const Placa = ({placa}) => {
    if(placa.horaSalida){
        return(
            <ListGroup.Item>
                {placa.placa} - {placa.horaEntrada.toLocaleString()} -{" "}
                {placa.horaSalida.toLocaleString()} - ${placa.precio}
            </ListGroup.Item>
        );
    }else{
        return(
            <ListGroup.Item>
                {placa.placa} - {placa.horaEntrada.toLocaleString()}
            </ListGroup.Item>
        );
    }   
}

export default Placa;