import CategoryItem from './CategoryItem'
     
function CategoriesList(props) {
    const { catalog } = props;

    return (
        <>
            <div className='list'>
                {
                    catalog.map(item => {
                        return <CategoryItem key={item.idCategory} {...item}/>
                    })
                }
            </div>
        </>
    )
}

export default CategoriesList;