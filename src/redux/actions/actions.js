import { GET_DATA_REQUEST } from "../type/types";


// Accion que se dispara desde el componente para iniciar el desencadenante .
//una accion poria recibir parametros ejemplo de una accion con parametros :

// export const actionGetData = ({payload}) => ({
//   type: GET_DATA_REQUEST, 
//   payload
// });



export const actionGetData = () => ({
  type: GET_DATA_REQUEST, 
});
