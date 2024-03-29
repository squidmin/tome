import React from 'react';

import { TableBasic } from './TableBasic';


export default {
  title: 'AntD/Table/TableBasic',
  component: TableBasic,
};

const Template = (args) => <TableBasic {...args} />

export const Default = Template.bind({});
Default.args = {
  dataSource: [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    }
  ],
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]
};