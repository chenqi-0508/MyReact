import React, { Component } from 'react'
import Form from './index'

export default class Test extends Component {
    state = {
    }
    render() {
        return (
            <div>
                <Form onSubmit={ data => {
                    console.log('获取表单数据：');
                    console.log(data);
                }}>
                    <div>
                        用户名：
                        <Form.input name="userName"/>
                    </div>
                    <div>
                        密码：
                        <Form.input type="password" name="passWord"/>
                    </div>
                    <div>
                        <Form.button type="button" name="submit">提交</Form.button>
                    </div>
                </Form>
            </div>
        )
    }
}
