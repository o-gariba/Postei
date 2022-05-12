import { useState } from 'react';
// import './App.css';

import DashboardFunction from './components/DashboardFunction';
import ExibeDadosDoFilho from './components/ExibeDadosDoFilho';

function App() {

  const [posts, setPosts] = useState([])

  const criarPost = (img, user, post) => {
    const novoPost = {img, user, post}
    const novoArrayPosts = [...posts, novoPost]
    setPosts(novoArrayPosts)
    console.log(posts)
  }

  return (
    <div>
      <DashboardFunction criarPost={criarPost}/> 
      <ExibeDadosDoFilho posts={posts}/>
    </div>
  );
}

export default App;
