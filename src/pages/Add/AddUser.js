import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { rootApi } from '../../constants';

const AddUser = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const addUserData = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!userName || !email || !phone) {
      setIsLoading(false);
      setIsError(true);
      setMessage('Please fill all the fields!');
      setTimeout(() => {
        setMessage('');
      }, 1000);
      // alert('Please fill all the fields!');
    } else {
      let formData = {
        id: uuidv4(),
        name: userName,
        email: email,
        phone: phone,
      };
      console.log('formData->', formData);
      axios
        .post(`${rootApi}/users`, formData)
        .then((res) => {
          console.log('res->', res);
          setIsLoading(false);
          setIsError(false);
          setMessage('New user added');
          setTimeout(() => {
            setMessage('');
            setEmail('');
            setPhone('');
            setMessage('');
            navigate('/');
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setIsError(true);
          setMessage('Something Went Wrong!');
        });
    }
  };
  return (
    <>
      <div className="w-screen h-full flex flex-col px-14 py-8  justify-center items-center mt-16 ">
        <h1 className="text-3xl text-black-200 font-semibold font-Montesarrat text-center">
          Add User
        </h1>
        <div className="w-[80%] block p-6 rounded-lg shadow-lg bg-white items-center justify-center">
          <h3
            className={
              isError === true
                ? 'text-2xl text-red-500 font-semibold font-Montesarrat text-center '
                : 'text-2xl text-green-500 font-semibold font-Montesarrat text-center '
            }
          >
            {message}
          </h3>
          <form
            className=" h-full flex flex-col  items-center mt-4 "
            onSubmit={addUserData}
          >
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              className="form-control block
              w-[80%]
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              mb-4
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control block
              w-[80%]
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              mb-4

              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="form-control block
              w-[80%]
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              mb-4

              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Phone number"
            />

            {/* <div className="form-group mb-6">
              <textarea
                className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div> */}

            <button
              type="submit"
              className="
            w-[80%]
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            >
              {isLoading ? <>Loading...</> : <>Submit</>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
