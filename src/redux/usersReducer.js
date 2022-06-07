import axios from "axios";
import {
  FOLLOW_TOGGLE,
  IS_LOADING_TOGGLE,
  SET_CURRENT_PAGE,
  SET_USERS,
  SET_USER_COUNT,
  USERS_CLEAN,
} from "./actions";
const initialState = {
  users: [],
  pageSize: 5,
  userCount: 0,
  currentPage: 1,
  isFetching: false,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE:
      const user = state.users[(action.userID % state.pageSize) - 1];
      axios
        .put(
          ` https://socialnet-a7b5f-default-rtdb.europe-west1.firebasedatabase.app/users/${
            action.userID - 1
          }/followed.json`,
          {
            followed: !user.followed.followed,
          }
        )
        .then((data) => {
          console.log(data);
        });

      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID)
            return {
              ...user,
              followed: {
                followed: !user.followed.followed,
              },
            };
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, action.users],
      };

    case USERS_CLEAN:
      return {
        ...state,
        users: [],
      };

    case SET_USER_COUNT:
      return {
        ...state,
        userCount: action.userCount,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case IS_LOADING_TOGGLE:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};
export default usersReducer;
export const followToggleAC = (userID) => ({
  type: FOLLOW_TOGGLE,
  userID,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
export const setUserCountAC = (userCount) => ({
  type: SET_USER_COUNT,
  userCount,
});
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const usersCleanAC = () => ({
  type: USERS_CLEAN,
});
export const isLoadingToggleAC = (isFetching) => ({
  type: IS_LOADING_TOGGLE,
  isFetching,
});
