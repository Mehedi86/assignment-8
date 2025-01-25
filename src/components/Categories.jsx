import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

const Categories = ({ handleCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <></>
    );
};

Categories.propTypes = {
    handleCategory: PropTypes.func.isRequired
}

export default Categories;