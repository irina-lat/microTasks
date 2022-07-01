type ComponentOne = {
    students: StudentType[]
    topCars: topCarsType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}
type topCarsType = {
    manufacturer: string,
    model: string
}

export const ComponentOne = (props: ComponentOne) => {
    return (
        <div>
            <ul>
                {props.students.map((StudentsArray, index) => {
                    return (
                        <li key={StudentsArray.id}>
                            <span>{StudentsArray.name}</span>
                            <span> age:{StudentsArray.age}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                {props.topCars.map((topCarsArray, index) => {
                    return (
                        <tbody key={index + 1}>
                        <tr>
                            <th>{topCarsArray.manufacturer}</th>
                            <th>model:{topCarsArray.model}</th>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>

    )
}