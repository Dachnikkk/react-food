import React, { useState, useEffect } from 'react'
import { getAllCategories } from '../api';
import { useLocation, useHistory } from 'react-router';
import CategoriesList from './CategoriesList';
import Prealoader from './Preloader'
import Search from './Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filtredCatalog, setFiltredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const { push } = useHistory();


    const handleCatalog = (value) => {
        if (!value) {
            setFiltredCatalog(catalog)
        } else {
            setFiltredCatalog(catalog.filter((item) => {
                return item.strCategory.toLowerCase().includes(value.toLowerCase())
            }))
        };
        push({
            pathname,
            search: `?search=${value}`
        })
    }

    useEffect(() => {
        getAllCategories().then((data) => { setCatalog(data.categories) })
        getAllCategories().then((data) => { setFiltredCatalog(data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()))) })
    }, [search])

    return (
        <>
            <Search cb={ handleCatalog }/>
            {
                !catalog.length ? <Prealoader /> : <CategoriesList catalog={ filtredCatalog }/>
            }
        </>
    )
}

export default Home