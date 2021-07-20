import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFilteredCategory } from '../api'
import Prealoader from './Preloader'
import MealList from './MealList'
 
function Category() {
    const { name } = useParams()
    const [meals, setMeals] = useState([])
    const { goBack } = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then(data => {setMeals(data.meals)})
    }, [name])

    return (
        <>
            <button onClick={goBack} className='btn'>Go Back</button>
            {
                !meals.length ? <Prealoader /> : <MealList meals={meals}/>
            }
            <button onClick={goBack} className='btn'>Go Back</button>
        </>
    )
}

export default Category