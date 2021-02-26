import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

export default () => {
    return(
        <Header style={{height: 60, borderBottom: '1px solid red', background: '#020000', display: 'flex', alignItems: 'center'}}>
            <div style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
                Movie Company
            </div>
        </Header>
    );
}