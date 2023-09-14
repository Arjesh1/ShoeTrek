import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Navigate } from "react-router-dom";
import { UserType } from "../components/interfaces/interface";

interface PrivateRouteProps {
  children:
    | ReactNode
    | string
    | number
    | boolean
    | Iterable<React.ReactNode>
    | null
    | undefined;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useSelector((state: RootState) => ({
    user: state.user.user as UserType,
  }));
  return user?.uid ? <>{children}</> : <Navigate to="/login" />;
};
