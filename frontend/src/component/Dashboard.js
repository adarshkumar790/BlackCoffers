import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import BarChart from './D3';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({
        end_year: '',
        topic: '',
        sector: '',
        region: '',
        pestle: '',
        source: '',
        country: '',
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (appliedFilters = {}) => {
        try {
            const response = await axios.get('http://localhost:5000/api/data', {
                params: appliedFilters
            });
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const applyFilter = () => {
        fetchData(filters);
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="filter-container">
                <Filter filters={filters} onFilterChange={handleFilterChange} onApplyFilter={applyFilter} />
            </div>
            <div className="data-visualization">
                <BarChart data={data} xVariable="title" yVariable="intensity" yLabel="Intensity" />
                <BarChart data={data} xVariable="title" yVariable="likelihood" yLabel="Likelihood" />
                <BarChart data={data} xVariable="title" yVariable="relevance" yLabel="Relevance" />
                <BarChart data={data} xVariable="end_year" yVariable="intensity" yLabel="Intensity by Year" />
                <BarChart data={data} xVariable="country" yVariable="intensity" yLabel="Intensity by Country" />
                <BarChart data={data} xVariable="topic" yVariable="intensity" yLabel="Intensity by Topic" />
                <BarChart data={data} xVariable="region" yVariable="intensity" yLabel="Intensity by Region" />
                <BarChart data={data} xVariable="city" yVariable="intensity" yLabel="Intensity by City" />
            </div>
            <div className="data-records">
                {data.map(record => (
                    <div key={record._id} className="data-record">
                        <p>Added: {new Date(record.added).toLocaleDateString()}</p>
                        <p>Country: {record.country}</p>
                        <p>End Year: {record.end_year}</p>
                        <p>Impact: {record.impact}</p>
                        <p>Insight: {record.insight}</p>
                        <p>Intensity: {record.intensity}</p>
                        <p>Likelihood: {record.likelihood}</p>
                        <p>Pestle: {record.pestle}</p>
                        <p>Published: {new Date(record.published).toLocaleDateString()}</p>
                        <p>Region: {record.region}</p>
                        <p>Relevance: {record.relevance}</p>
                        <p>Sector: {record.sector}</p>
                        <p>Source: {record.source}</p>
                        <p>Start Year: {record.start_year}</p>
                        <p>Title: {record.title}</p>
                        <p>Topic: {record.topic}</p>
                        <p>URL: <a href={record.url} target="_blank" rel="noopener noreferrer">{record.url}</a></p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
