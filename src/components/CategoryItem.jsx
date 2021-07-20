import {Link} from 'react-router-dom'

function CategoryItem(props) {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;
    
    return (
        <div className="row">
            <div className="col s12 m12">
                <div className="card">
                    <div className="card-image">
                        <img src={strCategoryThumb} alt={ strCategory }/>
                    </div>
                    <div className="card-title">{ strCategory }</div>
                    <div className="card-content">
                        <p>{ strCategoryDescription.slice(0, 30) }...</p>
                    </div>
                    <div className="card-action">
                        <Link to={`/category/${strCategory}`} className='btn'>Watch category</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default CategoryItem;