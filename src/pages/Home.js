import React, { useState, useEffect } from 'react';
import { db }                         from '../Firebase';
import Layout                         from 'components/Layout';
import Rooms                          from 'components/Rooms';

const Home = () => {

  const [rooms, setRooms] = useState(null)

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

        setRooms(result[0].rooms);
        console.log('result', result[0].rooms);
      });
    };

  useEffect(() => {

    getData();

  }, []);

  if (!rooms) return null;

  return (
      <div>
          <Layout>
              <Rooms datas={rooms} />
          </Layout>
      </div>
  );
};

export default Home;