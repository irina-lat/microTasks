import React, {useState} from "react";

type NewPropsType = {
    work: workType[]
}

type workType = {
    id: number,
    today: string,
    tomorrow: string
}

type FilterType = 'all' | 'two' | 'five'

export function New(props: NewPropsType) {

    const [filter, setFilter] = useState<FilterType>('all')

    let currentWork = props.work

    if (filter === 'two') {
        currentWork = props.work.filter((wFilter) => wFilter.tomorrow === 'two')
    }

    if (filter === 'five') {
        currentWork = props.work.filter((wFilter) => wFilter.tomorrow === 'five')
    }

    function onClickHandler(nameButton: FilterType) {
        setFilter(nameButton)
    }

    return (

        <div>
            <button onClick={() => onClickHandler('all')}>all</button>
            <button onClick={() => onClickHandler('two')}>two</button>
            <button onClick={() => onClickHandler('five')}>five</button>
            {currentWork.map((w, index) => {
                return (
                    <ul key={w.id}>
                        <li>{w.today} {w.tomorrow}</li>
                    </ul>)
            })}

        </div>
    )
}