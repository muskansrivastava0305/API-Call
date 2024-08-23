import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getposts, getRandomUser } from './api'
import UserCard from './component/UserCard'
import PostCard from './component/postcard'

function App() {
  const [data, setData] = useState(null);
  const [userData ,setUserData] = useState(null);

  useEffect (() => {
    getposts().then((posts) => setData(posts));
  }, [] )

  useEffect(() => {
    getRandomUser().then((user)=> setUserData(user.results[0]))
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData (user.results[0]))
  }
  return (
   ( <div className='App'>
   {userData && <UserCard data={userData}/> }
   <button onClick={refresh} className=' bg-black text-white p-2 m-2 hover:bg-slate-700 hover:text-yellow-200'>Refresh User</button>
    {
    data ? data.map((e)=> <PostCard title = {e.title} body={e.body}/>) : <p>No Data</p>
   } </div>)
  )
}

export default App
