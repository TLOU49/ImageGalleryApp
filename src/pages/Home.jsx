import React from 'react'
import { Link } from 'react-router-dom'
import { TaskBar } from '../components/TaskBar';
import { Header } from '../components/header/Header';

export const Home = () => {
  return (
    <div>
        <TaskBar/>
        <Header/>
    </div>
  )
}
