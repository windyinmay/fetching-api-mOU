import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import APIsTable from "../components/APIsTable";

export default function Axios() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const {data: res} = await axios.get('https://api.publicapis.org/entries');
            setData(res);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
        console.log(data)
    }, [isLoading, setData])

    if (error) {
        return <div>Error: {error.message}</div>
    }
    if(isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <APIsTable data={data}/>
            </div>
        )
    }
}