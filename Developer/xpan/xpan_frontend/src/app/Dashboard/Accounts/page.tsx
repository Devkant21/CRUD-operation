import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import React from 'react'
import LeftDash from '@/components/dashboard/LeftDash'
import MidAcc from '@/components/dashboard/accounts/MidAcc'
import Navbar from '@/components/homepage/Navbar'

export default function Page() {
    return (
        <div className='max-w-full'>

            

            <DashboardNavbar />

            <div className="flex mx-auto mt-10 lg:px-8">
                {/* Left Column */}
                <div className="flex-1 justify-end w-1/4">
                    <LeftDash />
                </div>

                {/* Middle Column */}
                <div className='flex-2 justify-center w-3/4 mx-auto'>
                    <MidAcc />
                </div>

            </div>

        </div>

    )
}