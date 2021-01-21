import React from 'react';

export default class LibroClass extends React.Component {
    state = { 
            persona: "Lorena",
            parientes: [
                "mamá", "papá", "etc"    ]
            
};

render() {
        const titulito = <h1> {persona} </h1>;
        this.setState({persona = "juan"});

        return titulito;
    }
}