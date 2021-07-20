import MealItem from './MealItem'

function MealList(props) {
    return (
        <div className='list'>
            {
                props.meals.map((meal) => {
                    return <MealItem key={meal.idMeal} {...meal} />
                })
            }
        </div>
    )
}

export default MealList