import Prealoader from "./Preloader"
import { getMealById } from "../api"
import { useParams, useHistory } from "react-router-dom"
import { useEffect, useState } from "react"

function Recipe() {

    const {id} = useParams()
    const [recipe, setRecipe] = useState({});
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then(response => setRecipe(response.meals[0]))
    }, [id])

    return (
        <>
            <button onClick={goBack} className='btn'>Go Back</button>
            {!recipe.idMeal ? <Prealoader /> : 
            <div className="recipe">
                <h3 className='recipeTitle'>{recipe.strMeal}</h3>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h5>Category: {recipe.strCategory}</h5>
                <h5>Area: { recipe.strArea }</h5>
                <p className='description'>{recipe.strInstructions}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Ingridient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Object.keys(recipe).map((key) => {
                            if (key.includes('Ingredient') && recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                    </tr>
                                )
                            }
                            return null
                        })}
                    </tbody>
                </table>
                <h4>Video recipe</h4>
                    <iframe width="1903" height="840" title={recipe.strMeal} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            }
            <button onClick={goBack} className='btn'>Go Back</button>
       </>
    )
}

export default Recipe
