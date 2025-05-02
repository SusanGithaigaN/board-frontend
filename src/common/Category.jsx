import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categories }) => {

    return (
        <div className="mb-4">
            <ul>
                {categories.map((category) => (
                    <li key={category.name} className="flex items-center justify-between py-1">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-[#309689] rounded border-gray-300 focus:ring-[#309689]" />
                            <span className="ml-2 text-gray-700 capitalize">{category.name}</span>
                        </label>
                        <span className="text-gray-500 rounded-full bg-gray-200 px-2 py-0.5 text-xs">{category.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Category.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            count: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Category;