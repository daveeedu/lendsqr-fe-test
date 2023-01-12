import React, { useEffect } from 'react'
import HomeLayout from '../../layout/Home'
import Header from '../../components/others/Header'
import styled from "styled-components";
import CardComp from "../../components/card/Card"
import { IActiveUser, IUse, ILoanuser, ISavingsUser } from "../../utils/icons"
import TableComp from '../../components/table/Table';
import userClient from '../../utils/axios';
import dayjs from 'dayjs';


const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
`


const UserDetails = () => {
  const [users, setUsers] = React.useState([])
  console.log(users)
  const [error, setError] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState({
		page: 1,
		pageSize: 10,
		total: 0
	});


const getUsers = async (  ) => {
  try {
    const users = await userClient.get(`/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
      });
      function loadUsers( data ) {
              console.log(users.data);
              setIsLoading(false);
              setPagination((state) => {
                return {
                  ...state,
                  total: users?.data?.length,
                  length: pagination.pageSize * pagination.page,
                };
              });
        
              const userData = users.data.map(
                (res) => {
                  const {
                    orgName,
                    userName,
                    email,
                    phoneNumber,
                    createdAt,
                    status=  res?.education?.employmentStatus,
                    id,
                  } = res
                  return {
                    _id: id,
                    ORGANIZATION: orgName,
                    USERNAME: userName,
                    EMAIL: email,
                    'PHONE NUMBER': phoneNumber,
                    'DATE JOINED': dayjs(createdAt).format('MMM DD, YYYY mm:ss A'),
                    'STATUS': status,
                    _data: res
                  };
                }
              );

    userData.length === 0
          ? setError("No users found")
          : userData === (null || undefined)
          ? setError("Error loading users")
          : setUsers(userData);
        return userData;
      }
      loadUsers(users);
  } catch (e) {
    console.error(e);
  }
}

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      await getUsers();
    })();
  }, [pagination.page]);


  return (
    <HomeLayout>
        <Header {...{ title: "Profile Overview" }} />
        <CardWrapper>
        <CardComp
          className=" col "
        >
          <img src={IUse} alt="icon" className='ml-10 mt-6' />
          <div className='ml-10 mt-3'>
          <span className='text-[500] text-[14px] text-[#545F7D]'>Users</span>
          <p className='text-[600] text-[24px] text-[#213F7D] '>2,453</p>
          </div>
          </CardComp>
          <CardComp
          className=" col "
        >
          <img src={IActiveUser} alt="icon" className='ml-10 mt-6' />
          <div className='ml-10 mt-3'>
          <span className='text-[500] text-[14px] text-[#545F7D]'>Active Users</span>
          <p className='text-[600] text-[24px] text-[#213F7D] '>2,453</p>
          </div>
          </CardComp>
          <CardComp
          className=" col "
        >
          <img src={ILoanuser} alt="icon" className='ml-10 mt-6' />
          <div className='ml-10 mt-3'>
          <span className='text-[500] text-[14px] text-[#545F7D]'>Users with Loans</span>
          <p className='text-[600] text-[24px] text-[#213F7D] '>2,453</p>
          </div>
          </CardComp>
          <CardComp
          className=" col "
        >
          <img src={ISavingsUser} alt="icon" className='ml-10 mt-6' />
          <div className='ml-10 mt-3'>
          <span className='text-[500] text-[14px] text-[#545F7D]'>Users with Savings</span>
          <p className='text-[600] text-[24px] text-[#213F7D] '>2,453</p>
          </div>
          </CardComp>
        </CardWrapper>

        {users.length ? (
        <TableComp
						 data={users}
						{...{ pagination, setPagination }}
					/> 
         ) : (
          <div className="text-center">
            <p className="text-[600] text-[#1F1F1F] pl-5 mt-5">{error}</p>
          </div>
          )}
    </HomeLayout>
  )
}

export default UserDetails