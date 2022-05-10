import { useEffect, useState } from 'react';
import './App.css';
// import Dashboard from './components/Dashboard';
import DashboardFunction from './components/DashboardFunction';
import ExibeDadosDoFilho from './components/ExibeDadosDoFilho';

function App() {

  // const [data, setData] = useState([])

  // const childToParent = (childData) => {
  //   setData(childData)
  //   // console.log(data)
  // }

  const [posts, setPosts] = useState([])

  const criarPost = (img, user, post) => {
    // console.log(`Post criado com os seguintes dados: USER = ${user}, AVATAR = ${img} e POST = ${post}`)
    const novoPost = {img, user, post}
    const novoArrayPosts = [...posts, novoPost]
    setPosts(novoArrayPosts)
    console.log(posts)
  }

  return (
    <div>
      {/* <Dashboard /> */}
      <DashboardFunction criarPost={criarPost}/> 
      <ExibeDadosDoFilho posts={posts}/>
    </div>
  );
}

export default App;
