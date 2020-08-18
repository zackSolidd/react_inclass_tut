import React, {Component} from 'react';
import './App.css';

import Display from "./Display"
import Ebere from "./Ebere"
import Student from "./Student"
import Todos from "./Todos"
import Actors from "./Actors"

class App extends Component {
  //
  render() {
    //
    let favSlang = " habita! wallah, I support you!!!";
    let favWord = "simi!";
    let info = [
      {
          name: "Devin",
          age : 4,
          hobby: [
              "swinging",
              "playing ludo" 
          ]
      },
      {
          name: "Kendra",
          age : 5,
          hobby: [
              "swinging",
              "playing ludo" 
          ]
      },
      {
          name: "Lu",
          age : 5,
          hobby: [
              "swinging",
              "playing ludo" 
          ]
      },
      {
          name: "Paul",
          age : 5,
          hobby: [
              "swinging",
              "playing ludo" 
          ]
      }
  ];
  let todos = [
    {
      todo: "Dance under the rain",
      status: false,
    },
    {
      todo: "Learn new language",
      status: false,
    },
    {
      todo: "Arrive Singapore",
      status: true,
    },
  ];

  let todosAlreadyCompleted = [
    {
      todo: "Left my home ",
      status: true,
      count: 10,

    },
    {
      todo: "Drank water today",
      status: true,
      count: 15,
    },
    {
      todo: "Left Singapore",
      status: true,
      count: 20,
    },
  ];

  const movies = [
    {
      id: 1,
      title: 'Dr. Strangelove',
      director: 'Stanley Kubrick',
      cast: [
        {
          name: 'Peter Sellers',
          role: 'President Merkin Muffley'
        },
        {
          name: 'George C. Scott',
          role: 'General Buck Turgidson'
        },
        {
          name: 'Slim Pickens',
          role: 'Major T.J. "King" Kong'
        }
      ]
    },
    {
      id: 2,
      title: 'Eraserhead',
      director: 'David Lynch',
      cast: [
        {
          name: 'Jack Nance',
          role: 'Henry Spencer'
        },
        {
          name: 'Charlotte Stewart',
          role: 'Mary X'
        },
        {
          name: 'Jeanne Bates',
          role: 'Mrs. X'
        }
      ]
    },
    {
      id: 3,
      title: 'Fantastic Mr. Fox',
      director: 'Wes Anderson',
      cast: [
        {
          name: 'George Clooney',
          role: 'Mr. Fox'
        },
        {
          name: 'Meryl Streep',
          role: 'Mrs. Fox'
        },
        {
          name: 'Bill Murray',
          role: 'Badger'
        }
      ]
    }
  ];


    return (
      <>
        {/* JSX comment */}
        {/* <div>Hello</div>
        <div>Hi</div>
        <Display 
          slang = {favSlang}
          word = {favWord}
          number = {30}
          greeting = "Hello! its me"
          info = {info}
          />
        <Ebere list = {["Ebere","Dyana","Jessica"]} listo ={{name:"Ebere"}} />
        <Student info = {info} /> */}
        {/* {favSlang}
        {favWord} */}
        {/* <h1>Todo List</h1>
        <Todos todos={todos} />

        <h1>Things I have done</h1>
        <Todos todos={todosAlreadyCompleted} /> */}

        <Actors />
        
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <div>hello</div>
//       <div>hi</div>
//       <Display />
//     </>
//   );
// }

export default App;
