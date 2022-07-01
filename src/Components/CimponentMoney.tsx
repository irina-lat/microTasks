import {useState} from "react";
import React from "react";

type ComponentMoney = {
    money: MoneyType[]
}

type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

type FilterType = 'ruble' | 'dollar' | 'all'

export const ComponentsMoney = (props: ComponentMoney) => {

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = props.money

    if (filter === 'dollar') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
    }

    if (filter === 'ruble') {
        currentMoney = props.money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS');
    }

    const onClickHandlerFilter = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <div>
            {currentMoney.map((MoneyArray, index) => {
                return (
                    <ul key={index}>
                        <li>{MoneyArray.banknots}{MoneyArray.value}{MoneyArray.number}</li>
                    </ul>
                )
            })
            }
            <div>
                <button onClick={() => onClickHandlerFilter('all')}>all</button>
                <button onClick={() => onClickHandlerFilter('dollar')}>dollars</button>
                <button onClick={() => onClickHandlerFilter('ruble')}>rubles</button>
            </div>
        </div>
    )
}