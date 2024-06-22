import React, { useEffect, useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";
import { Modal, Input, Button } from "antd";

function MainComponent(props) {
  const { getUsers, userState, addUser, editUser, deleteUser, setEditedUser, clearEditedUser, editedUser } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [deleteUserId, setDeleteUserId] = useState(null);

  const handleSubmit = ({ name, email }) => {
    if (editedUser) {
      editUser({ id: editedUser.id, name, email });
      clearEditedUser();
      setIsModalVisible(false);
    } else {
      addUser({ name, email });
    }
  };

  const handleEdit = (user) => {
    setEditedUser(user);
    setName(user.name);
    setEmail(user.email);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    setDeleteUserId(id);
    setIsDeleteConfirmVisible(true);
  };

  const confirmDelete = () => {
    deleteUser(deleteUserId);
    setIsDeleteConfirmVisible(false);
    setDeleteUserId(null);
  };

  const cancelDelete = () => {
    setIsDeleteConfirmVisible(false);
    setDeleteUserId(null);
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div id="main-container-wrapper" style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Impress.ai Assignment</h1>
      <InputHandler onSubmit={handleSubmit} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <SimpleTable dataSource={userState.users} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <Modal
        title="Edit User"
        visible={isModalVisible}
        onOk={() => handleSubmit({ name, email })}
        onCancel={() => setIsModalVisible(false)}
      >
        <div className="edit-box">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: '10px', width: '100%' }}
          />
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '10px', width: '100%' }}
          />
        </div>
      </Modal>
      <Modal
        title="Confirm Delete"
        visible={isDeleteConfirmVisible}
        onOk={confirmDelete}
        onCancel={cancelDelete}
      >
        <p>Are you sure you want to delete this user?</p>
      </Modal>
    </div>
  );
}

export default MainComponent;
