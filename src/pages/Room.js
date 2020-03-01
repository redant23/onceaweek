import React, { useState, useEffect } from 'react';
import { db }                         from '../Firebase';
import Layout                         from 'components/Layout';
import Room                          from 'components/Room';

const PRoom = ({ match }) => {

  const [room, setRoom] = useState(null)

  const updateData = () => {

  }

  const getData = () => {

    db.collection('test2')
      .get()
      .then(querySnapshot => {

        const result = [];

        querySnapshot.forEach((doc) => {
          result.push(doc.data());
        });

        const target = result[0].rooms.find(room => room._id === match.params._id);

        setRoom(target);

      });

    };

  useEffect(() => {

    getData();

  }, []);

  if (!room) return null;

  return (
    <div>
      <Layout noneHeader={true}>
        <Room data={room}/>
      </Layout>
    </div>
  );
};

export default PRoom;