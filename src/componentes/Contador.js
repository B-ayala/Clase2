import React from "react";
import './Contador.css';

class Contador extends React.Component {
    constructor(props){
        super(props)
        console.log(`contador primera vista ${props.id} constructor`) //mostrar los id por console los que pase por app.js
        this.incrementar=this.incrementar.bind(this);// que el incrementar sea sobre eso?
    }

    incrementar(){
        console.log(`contador en efecto  ${this.props.id} incrementar`) // lo que va a mostrar al incrementar los id
    }
    state = {
        contador : this.props.valor //varias maneras de hacer
    }

    render (){
        console.log('contador render')
        let {id, fondo} = this.props
        //let {contador} = this.state
    
        return (
            <div className="Contador">
                <div className="jumbotron" style={{backgroundColor:fondo}}>
                <h3>contador : {id}</h3>
                <h4 className="alert alert-info w-50">valor: {this.state.contador}</h4>
                <button onClick={this.incrementar}>incrementar</button>
                </div>

            </div>
            
        )

    }

}

export default Contador