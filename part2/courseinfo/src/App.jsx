const Course = ({ course }) => {
  const total = course.parts.reduce((sum, { exercises }) => sum + exercises, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={total} />
    </div>

  )
}

const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <strong>Number of exercises {sum}</strong>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) =>
        <Part key={part.id}
          part={part}
        />
      )}

    </>
  )
}

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => <Course key={course.id} course={course} />)}
    </div>)
}

export default App