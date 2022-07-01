export const ComponentTwo = () => {

    const firstSubscriber = () => {
        console.log('Hi, my name is Annya')
    }

    const secondSubscriber = (str: string) => {
        console.log(str)
    }

    const fo1 = () => {
        console.log(222)
    }

    const fo2 = (num: number) => {
        console.log(num)
    }

    return (
        <div>
            {/*<button onClick={(event)=>{console.log("Hellow")}} >chanel</button>*/}
            <button onClick={firstSubscriber}>chanelOne</button>
            <button onClick={() => secondSubscriber('Hi, my name is Jone')}>chanelTwo</button>

            <button onClick={fo1}>1</button>
            <button onClick={() => fo2(111)}>2</button>
        </div>
    )
}