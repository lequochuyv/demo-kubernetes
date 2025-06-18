"use client"
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_HOST_SERVICE}:${process.env.NEXT_PUBLIC_PORT_BACKEND}`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendUrl}/users/list`);
                const data = await response.json();
                console.log('Fetched users:', data); // Debugging line to check fetched data  
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

  return (
    <div>
      <h1>User Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
        </tbody>
      </table>
    </div>
  );
}
