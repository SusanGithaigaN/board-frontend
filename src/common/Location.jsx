import React from 'react';
import { continents } from '../data/Data';

export const Location = () => {
    return (
        <>
            <form className="max-w-sm mx-auto">
                <select
                    id="countries"
                    className="bg-white border-none text-gray-500 text-sm rounded-lg w-full p-2"
                >
                    <option value="" disabled selected>📍 Choose location</option>
                    {continents.map((continent, index) => (
                        <option key={index} value={continent.locName} className="text-gray-900">
                            {continent.locName}
                        </option>
                    ))}
                </select>
            </form>
        </>
    );
}

export default Location;