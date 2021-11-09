import './Mensaje.css'


/**********************************************************************************/
/* componente basado en una funcion NO GUARDA estado! -> stateles)*/
/**********************************************************************************/
//export function Mensaje (){
    function Mensaje (props){
        //let msj = "mensaje nro 1";
        //let msj = props.msj;
        //let fondo = props.fondo;

        let {msj, fondo} = props // destructuring objet en orden que lo pasa en el orden que lo recibe como parametros
    return (
            <div className="Mensaje"  >
                <div className="Jumbotron" style = {{backgroundColor: fondo}} >
                    <h3>{msj}</h3>
                    <hr />
                   
                    {/*new Date().toLocaleString()*/}
                    {/*Date.now()*/}
                    
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <br />
                    
                    
                </div>

            </div>
    
          )
}

//export default Mensaje
export {Mensaje}  
