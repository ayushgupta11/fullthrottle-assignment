import React, { useState, useEffect } from 'react';
import makeRequest from './utils/makeRequest'
import './App.scss';

import UserList from './components/UserList'

function App() {
  const [data, setData] = useState({
    loading: false,
    data: {},
    error: false
  })
  useEffect(() => {
    setData({
      ...data,
      loading: true
    })
    makeRequest.get('fetch').then((response) => {
      if(response.data.status.code === 200){
        setData({
          ...data,
          loading: false,
          error: false,
          'data': {...response.data.data}
        })
      }
      else{
        setData({
          ...data,
          loading: false,
          error: true
        })
        console.log(response.data)
      }
    }).catch((err) => {
      setData({
        ...data,
        loading: false,
        error: true
      })
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
      <UserList data={data} />
    </div>
  );
}

export default App;
