import React from 'react';
import { Form, Input, } from 'antd';

import 'antd/dist/antd.css';

function FormStep1() {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };

    const validateMessages = {
    required: 'This field is required!',
    types: {
        email: 'Not a validate email!',
        number: 'Not a validate number!',
    },
    number: {
        range: 'Must be between ${min} and ${max}',
        },
    };   

    

    return (
        <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="Nom" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'adresse']} label="Adresse" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'codePostal']} label="Code Postal" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'phone']} label="Téléphone">
          <Input />
        </Form.Item>

      </Form>
    )
}

export default FormStep1;

