import {Component} from 'react'
import {withRouter} from 'react-router-dom'

let n = 0;

class RouteGuard extends Component {
    componentDidMount() {
        this.reListen = this.props.history.listen((location, action) => {
            n++;
            if (n > 50) {
                this.reListen();
            }

            console.log(`日志${n}：从页面${this.props.location.pathname}进入到页面${location.pathname}`);
            console.log(`进入页面的方式：${action}`);
        });

        // this.props.history.block("真的要跳转页面么？");
    }

    componentWillUnmount() {
        this.reListen();
    }

    render() {
        return this.props.children;
    }
}

// function RouteGuard(props) {
//     console.log(1);
//     props.history.listen((location) => {
//         console.log(location);
//     });
//     return props.children;
// }

export default withRouter(RouteGuard);
//为什么函数组件添加listen会执行多次？
