import React, { useEffect,useState } from 'react'
import { account } from '../appwrite/appwriteconfig'
import { useNavigate, Link } from 'react-router-dom'
import UserInfo from '../components/UserInfo'

const Profile = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState()
    useEffect(() => {
        const getUserDetails = async () => {
            try {
                const response = await account.get()
                setUserDetails(response)
            } catch (error) {
                console.log(error)
            }
        }
        getUserDetails()
    }, [])

    const logoutUser = async () => {
        try {
            await account.deleteSession('current')
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    
    <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={logoutUser}
              >
                Logout
              </button>
            </div>
          </div>
          <UserInfo userDetails={userDetails}/>
         
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/login">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  )
}

export default Profile