import React from "react";
import { Table, Button } from "antd";

const SimpleTable = ({ dataSource, onEdit, onDelete }) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: '10px' }}
            onClick={() => onEdit(record)}
          >
            Edit
          </Button>
          <Button type="danger" onClick={() => onDelete(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey="id"
      style={{ width: '70%', margin: '0 auto' }}
    />
  );
};

export default SimpleTable;
