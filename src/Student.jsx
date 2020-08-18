import React, { Component } from 'react'

class Student extends Component {
    render() {
        return (
            <div>
            <h3>{this.props.info.map((student) => (
                <li>{student.name} - {student.age}</li>
            ))}</h3>
            </div>
        )
    }
}

export default Student;