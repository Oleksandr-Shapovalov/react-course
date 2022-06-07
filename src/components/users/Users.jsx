import React from "react";
import style from "./Users.module.css";
import User from "./User/User";

const Users = ({
  onPageChange,
  pageSize,
  userCount,
  currentPage,
  users,
  followToggle,
}) => {
  const pageCount = Math.ceil(userCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div className={style.Wrapper}>
      <div className={style.usersContainer}>
        <h2 className={style.title}>Users</h2>
        {users.map((user) => {
          if (!user) return;
          return <User followToggle={followToggle} user={user} key={user.id} />;
        })}
      </div>
      <div className={style.pagination}>
        <button
          onClick={() => {
            onPageChange(1);
          }}
          className={`${style.pagination_item} ${
            currentPage === 1 && style.pagination_item_disabled
          } `}
          disabled={currentPage === 1 && true}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </button>
        {pages
          .filter((page) => Math.abs(currentPage - page) < 2)
          .map((page) => (
            <button
              onClick={() => {
                onPageChange(page);
              }}
              className={`${style.pagination_item} ${
                currentPage === page && style.pagination_item_selected
              } `}
              key={page}
            >
              {page}
            </button>
          ))}
        <button
          onClick={() => {
            onPageChange(pageCount);
          }}
          className={`${style.pagination_item} ${
            currentPage === pageCount && style.pagination_item_disabled
          } `}
          disabled={currentPage === pageCount && true}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Users;
