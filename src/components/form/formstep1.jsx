import React, { useState, useEffect } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, } from 'antd';
import 'antd/dist/antd.css';

function FormStep1() {

    const [confirmDirty, setConfirmDirty] = useState(false);
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    
    return(
        <div>
            <h1>Hello 1</h1>
        </div>
    )
}

export default FormStep1;