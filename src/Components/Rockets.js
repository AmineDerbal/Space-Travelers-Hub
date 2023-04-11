import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsData } from '../redux/rockets/rocketsSlice';
import Loader from './Loader';
import Rocket from './Rocket';

const Rockets = () => {
  const { rockets, isLoading, hasError } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsData());
  }, [dispatch]);
  if (isLoading) {
    return <Loader />;
  }

  if (hasError) return <h2>An error has occured</h2>;

  return rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />);
};

export default Rockets;
