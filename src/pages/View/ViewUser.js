import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { rootApi } from '../../constants';

const ViewUser = () => {
  const { state } = useLocation();
  console.log('View-sData=>', state?.singleUser);
  const { vid } = useParams();

  // const getOneUser = async () => {
  //   try {
  //     const oneUser = await axios.get(`${rootApi}/users/${vid}`);
  //     console.log('oneUser', oneUser);
  //   } catch (err) {
  //     console.log('Something went wrong!', err);
  //   }
  // };
  // useEffect(() => {
  //   getOneUser();
  // }, []);

  useEffect(() => {
    return () => {};
  }, [state?.singleUser, vid]);

  return (
    <>
      <div className="w-full h-full justify-center flex flex-col mt-4 px-14">
        {state?.singleUser ? (
          // <div className="flex justify-center">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              {state?.singleUser?.name}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              {state?.singleUser?.email}
            </p>
            <p className="text-gray-700 text-base mb-4">
              {state?.singleUser?.phone}
            </p>
          </div>
        ) : (
          // </div>
          <h1 className="text-3xl text-black-200 font-semibold font-Montesarrat text-center">
            No data found!
          </h1>
        )}
      </div>
    </>
  );
};

export default ViewUser;
