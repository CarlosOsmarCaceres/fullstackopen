import React from 'react'
import { createRoot } from 'react-dom/client';

/*const Header = ({course}) => <h1>{course}</h1>*///Es la forma mas corta 
const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  return <p>{props.part} {props.exercises} </p>
  
}

const Total = (props) => {
  const totalResultado = props.exercises1 + props.exercises2 + props.exercises3
  return <p> Number of excercises {totalResultado}{props.msg} </p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} msg="njnjn"/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
  
}

//ReactDOM.render(<App />, document.getElementById('root'))

const root = createRoot(document.getElementById('root'));
root.render(<App />);
