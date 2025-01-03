"use client";

import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  ip: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        setError('An error occurred while fetching the users');
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded">
            <h2 className="font-semibold text-lg">{user.id}</h2>
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p>{user.ip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
