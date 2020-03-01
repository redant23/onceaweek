import React, { useEffect, useState }    from 'react';
import { db } from './Firebase';
import './App.css';

function App() {

  const [roomDatas, setRoomDatas] = useState(null);

  const addTest = () => {

  }

  const getData = () => {
    db.collection('test2')
      .get()
      .then(querySnapshot => {
        const result = [];
        querySnapshot.forEach((doc) => {
          result.push(doc.data());
        });

        setRoomDatas(result[0].rooms);
        console.log('result', result[0].rooms);
      });
  };

  useEffect(() => {
    getData();

  }, []);

  if (!roomDatas) return null;

  return (
    <div className="App">
      <header className="App-header">
        {
          roomDatas.length && roomDatas.map(({id, name}) => (
            <div>
              <div>{id}</div>
              <div>{name}</div>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
