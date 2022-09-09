import InfoCard from "./InfoCard"
export default function GuessComponent(props){
    
    const modes =[
        {   
            textMode : 'Quotes',
            imageMode : 'question'
        },
        {
            textMode : 'Abilities',
            imageMode : 'fire'
        },
        {
            textMode : 'Items',
            imageMode : 'book'
        },
        {
            textMode : 'Build',
            imageMode : 'hammer'
        }

    ]
    return (

        <div className="w-max h-max elem-dark-blue p-8 rounded-xl shadow-2xl">
            <h1 className="text-white text-center">
                Welcome To Guess The Champ ! 
                <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 flex  sm:gap-y-2 sm:gap-x-2 gap-x-3 md:gap-x-6 ">
                {
                    modes.map((mode,index) => <InfoCard textMode={mode.textMode} onClick={() => props.onClick()} key={index} imageMode={mode.imageMode}/>)
                }
                </div>
            </h1>
        </div>
    )
}