import React, { useContext } from "react";
import {
  followToggleAC,
  isLoadingToggleAC,
  setCurrentPageAC,
  setUserCountAC,
  setUsersAC,
  usersCleanAC,
} from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";
import { UsersContext } from "./UsersContext";

const UsersContainer = () => {
  const { users, dispatch, pageSize, userCount, currentPage, isFetching } =
    useContext(UsersContext);

  const followToggle = (userID) => {
    dispatch(followToggleAC(userID));
  };
  const setUsers = (users) => {
    dispatch(setUsersAC(users));
  };
  const setUserCount = (userCount) => {
    dispatch(setUserCountAC(userCount));
  };
  const setCurrentPage = (currentPage) => {
    dispatch(setCurrentPageAC(currentPage));
  };
  const usersClean = () => {
    dispatch(usersCleanAC());
  };
  const loadingToggle = (isFetching) => {
    dispatch(isLoadingToggleAC(isFetching));
  };
  return (
    <UsersAPIComponent
      loadingToggle={loadingToggle}
      users={users}
      followToggle={followToggle}
      setUsers={setUsers}
      pageSize={pageSize}
      userCount={userCount}
      setUserCount={setUserCount}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      usersClean={usersClean}
      isFetching={isFetching}
    />
  );
};
export default UsersContainer;
