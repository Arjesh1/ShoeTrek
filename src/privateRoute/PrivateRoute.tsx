import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}: any) => {
    const { user  }: any = useSelector((state: RootState) => state.user)
  return user?.uid ? children: <Navigate to="/login"/>
}


