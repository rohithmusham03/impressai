import React from "react";
import "./assets/css/style.css";
import { connect } from "react-redux";
import "../node_modules/antd/dist/antd.css";
import MainComponent from "./components/mainComponent";
import { addUser, getUsers, deleteUser, editUser, setEditedUser, clearEditedUser } from "./actions/userActions";

function App(props) {
  return (
    <div>
      <MainComponent {...props} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
  editedUser: state.editedUser,
});

const mapDispatchToProps = {
  getUsers,
  addUser,
  deleteUser,
  editUser,
  setEditedUser,
  clearEditedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
