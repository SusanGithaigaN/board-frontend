import React from 'react';
import PropTypes from 'prop-types';

export const DisplayCards = ({ displayCards }) => {
    return (
        <div className="grid grid-cols-3 items-center gap-2 md:gap-8 px-4 max-w-4xl py-4">
            {(displayCards || []).map((card, index) => (
                <div
                    key={index}
                    className="flex flex-row items-center justify-start text-white bg-transparent space-x-2 md:space-x-4 p-0 md:p-4"
                >
                    {card.img && (
                        <img
                            className="info-icon img-fluid w-6 h-6 md:w-12 md:h-12 rounded-full"
                            src={card.img}
                            alt={card.tally}
                        />
                    )}
                    <div>
                        <h3 className="info-tally text-sm md:text-xl font-bold uppercase">
                            {card.tally}
                        </h3>
                        <p className="info-description text-sm font-thin capitalize">
                            {card.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

DisplayCards.propTypes = {
    displayCards: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string,
            tally: PropTypes.string,
            description: PropTypes.string,
        })
    ).isRequired,
};

export default DisplayCards;
