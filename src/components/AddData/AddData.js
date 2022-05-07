import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AddData = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/allData");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div style={{ marginTop: '150px' }}>
            <table className="style-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>ID</th>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Age</th>
                        <th style={{ textAlign: "center" }}>Gender</th>
                        <th style={{ textAlign: "center" }}>Birth Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={item.id}>

                                    <th scope='row'>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.birthDate}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`}>
                                            <button className='btn btn-edit'>Edit</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/delete/${item.id}`}>
                                            <button className='btn btn-danger'>Delete</button>
                                        </Link>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AddData;