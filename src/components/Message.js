import {Component}from'react';
class Message extends Component {
    render(){
        return <h1>日本語能力試験N2に合格できました。{this.props.secretMessage}</h1>
    }
}
export default Message