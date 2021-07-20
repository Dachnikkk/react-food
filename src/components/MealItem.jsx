import { Link } from 'react-router-dom'

function MealItem(props) {
    const {strMeal, strMealThumb, idMeal} = props
    return (
                <div className="card">
                    <div className="card-image">
                        <img src={strMealThumb} alt={ strMeal }/>
                    </div>
                    <div className="card-title">{strMeal}</div>
                    <div className="card-content">
                        <p></p>
                    </div>
                    <div className="card-action">
                        <Link to={`/recipe/${idMeal}`} className='btn'>Watch recipe</Link>
                    </div>
                </div>
    )
}

export default MealItem