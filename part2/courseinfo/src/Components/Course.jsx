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

export default Course