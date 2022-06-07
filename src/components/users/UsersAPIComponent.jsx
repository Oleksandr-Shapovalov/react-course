import React from "react";
import axios from "axios";
import Users from "./Users";
import Loading from "../Loading/Loading";
import { useState } from "react";
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.userRequest();
  }
  componentWillUnmount() {
    this.props.usersClean();
  }
  userRequest() {
    this.props.loadingToggle(true);
    axios
      .get(
        "https://socialnet-a7b5f-default-rtdb.europe-west1.firebasedatabase.app/count.json"
      )
      .then(({ data }) => {
        this.props.setUserCount(data);
        for (
          let i = (this.props.currentPage - 1) * this.props.pageSize;
          i < this.props.pageSize * this.props.currentPage;
          i++
        ) {
          axios
            .get(
              `https://socialnet-a7b5f-default-rtdb.europe-west1.firebasedatabase.app/users/${i}.json`
            )
            .then(({ data }) => {
              this.props.setUsers(data);
              this.props.loadingToggle(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  onPageChange(page) {
    this.props.setCurrentPage(page);
    this.props.usersClean();
    this.userRequest();
  }
  render() {
    if (this.props.isFetching) {
      return <Loading />;
    }
    return (
      <Users
        users={this.props.users}
        onPageChange={this.onPageChange.bind(this)}
        followToggle={this.props.followToggle}
        pageSize={this.props.pageSize}
        userCount={this.props.userCount}
        currentPage={this.props.currentPage}
      />
    );
  }
}

export default UsersAPIComponent;
