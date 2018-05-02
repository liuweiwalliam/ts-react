import * as React from 'react';
import {Button} from 'antd'
import './index.css';


class A extends React.Component {

	componentDidMount(){
		this.tsfu();
	}
	tsfu (){
		// alert(1);
	}
	render() {
		return (
			<p className="a">
				测试a组件<Button>按钮</Button>
			</p>
		);
	}
}

export default A;