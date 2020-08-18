import React, { Component } from 'react'

class Ebere extends Component {
    render() {
        return (
            <div>
                Ebere Class Component
                <div>
                    {this.props.list.map 
                    ((name) => (
                        <li> {name} </li>
                    ))}
                </div>
                {this.props.listo.name}
            </div>
        );
    }
}

export default Ebere;