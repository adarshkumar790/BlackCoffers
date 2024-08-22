import React from 'react';
import './Filter.css';

const Filter = ({ filters, onFilterChange, onApplyFilter }) => {
    return (
        <div className="filter-container">
            <div>
                <label>End Year:</label>
                <input
                    type="text"
                    name="end_year"
                    value={filters.end_year}
                    onChange={onFilterChange}
                />
            </div>
            <div>
                <label>Topic:</label>
                <input
                    type="text"
                    name="topic"
                    value={filters.topic}
                    onChange={onFilterChange}
                />
            </div>
            <div>
                <label>Sector:</label>
                <input
                    type="text"
                    name="sector"
                    value={filters.sector}
                    onChange={onFilterChange}
                />
            </div>
            <div>
                <label>Region:</label>
                <input
                    type="text"
                    name="region"
                    value={filters.region}
                    onChange={onFilterChange}
                />
            </div>
            <div>
                <label>PEST:</label>
                <input
                    type="text"
                    name="pestle"
                    value={filters.pestle}
                    onChange={onFilterChange}
                />
            </div>
            <div>
                <label>Source:</label>
                <input
                    type="text"
                    name="source"
                    value={filters.source}
                    onChange={onFilterChange}
                />
            </div>
            <div>
                <label>Country:</label>
                <input
                    type="text"
                    name="country"
                    value={filters.country}
                    onChange={onFilterChange}
                />
            </div>
            <button onClick={onApplyFilter}>Apply Filters</button>
        </div>
    );
};

export default Filter;
