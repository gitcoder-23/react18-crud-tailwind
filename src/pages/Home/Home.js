import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { rootApi } from '../../constants';

const Home = () => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mesasge, setMessage] = useState('');

  const loadAllUsers = () => {
    setIsLoading(true);
    axios
      .get(`${rootApi}/users`)
      .then((res) => {
        console.log('res->', res.data.reverse());
        if (res.status === 200) {
          if (res.data.length === 0) {
            setIsLoading(false);
            setMessage('No Data Found!');
          } else {
            setIsLoading(false);
            setAllUsers(res);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setMessage('Something Went Wrong!');
      });
  };

  useEffect(() => {
    loadAllUsers();
    return () => {};
  }, []);

  const viewClick = (sData) => {
    // console.log('sData->', sData);
    navigate(`/view/user/${sData.id}`, {
      state: { singleUser: sData },
    });
  };

  const deleteUser = (uId) => {
    console.log(uId);

    if (window.confirm('Do you want?')) {
      axios
        .delete(`${rootApi}/users/${uId}`)
        .then((dData) => {
          console.log(dData);
          loadAllUsers();
        })
        .catch((err) => {
          console.log(err);
          loadAllUsers();
        });
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col px-14 py-8">
        <div className="w-full flex flex-col min-h-[50vh] justify-center ">
          <h1 className="text-3xl text-black-200 font-semibold font-Montesarrat text-center">
            No. of user- {allUsers?.data?.length}
          </h1>
          {isLoading ? (
            <h1 className="text-3xl text-black-200 font-semibold font-Montesarrat text-center">
              Loadng...
            </h1>
          ) : mesasge ? (
            <>
              <h1 className="text-3xl text-black-200 font-semibold font-Montesarrat text-center">
                {mesasge}
              </h1>
            </>
          ) : (
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-center border border-black overflow-hidden overflow-y-scroll">
                    {/* <table className="w-[80%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black"> */}
                    <thead className="border-b bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    {allUsers &&
                      allUsers?.data.reverse().map((uData, indx) => (
                        <tbody key={indx}>
                          {/* <tr className="bg-white border-b"> */}
                          <tr className="bg-white">
                            <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                              {indx + 1}
                            </td>
                            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {uData.name}
                            </td>
                            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {uData.email}
                            </td>
                            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {uData.phone}
                            </td>
                            <td className="flex space-x-4 whitespace-nowrap items-center justify-center py-4 px-4">
                              <button
                                onClick={() => viewClick(uData)}
                                className="px-6 py-2 text-white bg-black hover:bg-gray-600 ease-in-out duration-500 rounded-lg"
                              >
                                View
                              </button>
                              <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-400 ease-in-out duration-500 rounded-lg">
                                Edit
                              </button>
                              <button
                                onClick={() => deleteUser(uData.id)}
                                className="px-6 py-2 text-white bg-red-600 hover:bg-red-400 ease-in-out duration-500 rounded-lg"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                          {/*                   
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td
                          colspan="2"
                          className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                        >
                          Larry the Bird
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td>
                      </tr> */}
                        </tbody>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
