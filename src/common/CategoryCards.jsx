import React from 'react';
import PropTypes from 'prop-types';

export const CategoryCards = ({ cards }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="flex flex-col rounded-2xl bg-white items-center space-y-2 md:space-y-6 p-4"
                >
                    {card.icon && (
                        <img
                            src={card.icon}
                            alt={card.title}
                            className="w-8 h-8 md:w-12 md:h-12 object-cover"
                        />
                    )}
                    <p className="font-bold text-base sm:text-base lg:text-xl capitalize">
                        {card.title}
                    </p>
                    <p className="text-sm text-gray-600">
                        {card.desc}
                    </p>
                    <p className="text-xs text-[#309689] font-bold p-2 rounded-md bg-[#309689]/10 w-fit">
                        {card.jobs}
                    </p>
                </div>
            ))}
        </div>
    );
};

CategoryCards.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            desc: PropTypes.string,
        })
    ).isRequired,
};

export default CategoryCards;
