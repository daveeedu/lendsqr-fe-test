import React from 'react'
import Header from '../../components/others/Header'
import HomeLayout from '../../layout/Home'

const Dashboard = () => {
  return (
    <HomeLayout>
        <Header {...{ title: "Profile Overview" }} />

    </HomeLayout>
  )
}

export default Dashboard