import React from "react";
import io from "socket.io-client";
import { Button, InputItem, List } from "antd-mobile";

export default class webSocketDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      socket: io("http://10.10.20.146:3001")
    };
    this.sendSms = this.sendSms.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.initSocket();
  }

  sendSms() {
    this.state.socket.emit("events", { test: this.state.value });
  }

  initSocket() {
    let socket = this.state.socket;
    socket.on("connect", function() {});
    socket.on("events", function(data) {
      console.log("event", data);
    });
    socket.on("identity", function(data) {
      console.log("identity", data);
    });
    socket.on("exception", function(data) {
      console.log("exception", data);
    });
    socket.on("disconnect", function() {
      console.log("Disconnected");
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List>
          <InputItem
            value={this.state.value}
            placeholder="sms"
            clear
          >
            sms
          </InputItem>
          <Button onClick={this.sendSms}>发送</Button>
        </List>
      </div>
    );
  }
}
