import './App.css';
import Header from './header';
import Stories from './Stories';
import Icons from './Icons';
import FeedForm from './FeedForm';
import profile from './resources/profile.jpg';
import { useState, useEffect } from 'react';
import { storage, db } from './firebase';



function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(function (doc) {
        return { info: doc.data() }
      }))
    })
  }, [])


  return (
    <div className='App'>
      <Header />
      <div className='teste'>
        
        <Stories />
        <Icons />
        {
          posts.map(function (val) {
            return (
              <FeedForm nome={val.info.nome} conteudo={val.info.conteudo} horario={val.info.horario} />
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
