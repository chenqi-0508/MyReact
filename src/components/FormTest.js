import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FormTest extends Component {
    static propTypes = {
        a: PropTypes.number.isRequired
    }

    state = {
        userName: 'chenqi',
        password: '',
        sex: 'male',
        loves: [
            {id: 'football',name: '足球'},
            {id: 'basketball',name: '蓝球'},
            {id: 'movies',name: '电影'},
            {id: 'music',name: '音乐'},
        ],
        chooseLoves: []
    }
    handleChange = (e) => {
        let val = e.target.value;
        const name = e.target.name;
        if(e.target.type === "checkbox") {
            if(e.target.checked) {
                val = [...this.state.chooseLoves, val];
            }else {
                val = this.state.chooseLoves.filter( it => it !== val)
            }
        }
        this.setState({
            [name]: val
        })
    }
    getMyLove = () => {
        const loves = this.state.loves;
        
        return loves.map((item) => (
            <label key={item.id}>
                <input type="checkbox" name="chooseLoves" checked={this.state.chooseLoves.includes(item.id)}
                    onChange={this.handleChange} value={item.id}/> {item.name}
            </label>
        ));
    }
    getFormInfo = () => {
        console.log(this.state);
    }
    render() {
        let chooseLove = this.getMyLove();
        return (
            <div>
                <p>
                    <label>
                        姓名：{this.props.a}
                        <input type="text" value={this.state.userName} name="userName"
                            onChange={this.handleChange}/>    
                    </label>
                </p>
                <p>
                    <label>
                        密码：
                        <input type="password" name="password" value={this.state.password}
                            onChange={this.handleChange}/>
                    </label>
                </p>
                <p>
                    性别：
                    <label>
                        <input type="radio" name="sex" value="male" checked={this.state.sex === "male"}
                            onChange={this.handleChange}/>男
                    </label>
                    <label>
                        <input type="radio" name="sex" value="female" checked={this.state.sex === "female"}
                            onChange={this.handleChange}/>女
                    </label>
                </p>
                <p>
                    爱好：
                    {chooseLove}
                </p>
                <p>
                    <button onClick={this.getFormInfo}>ALL</button>
                </p>
            </div>
        )
    }
}
