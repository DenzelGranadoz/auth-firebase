import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {
  const { user, logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome
        <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button onClick={handleLogout} variant="primary">
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
