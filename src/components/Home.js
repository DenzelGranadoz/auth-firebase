import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {
  const { user } = useUserAuth();

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome
        <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary">Log out</Button>
      </div>
    </>
  );
};

export default Home;
