import React, { ReactNode } from 'react'
import { Header } from './Header'
import Footer from './Footer';
import './layout.css'

interface MainLayoutProps {
    children: ReactNode;
  }
  
const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
    {/* header */}
    <Header/>


    <div className='main-children'>
{children}
    </div>

    <Footer/>
      
    </>
  )
}

export default MainLayout
