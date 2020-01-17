import React from "react";
import logo from "./o-letter.png";
import dustbin from "./delete2.png";
import sharesocial from "./share.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      })
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist })
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }
  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" alt="logo" />
        <h1 className="app-title font-heading">EzDone - Task Scheduler</h1>
        <div className="container">
          <br />
          <div className="mid">
            <input
              type="text"
              className="input-text"
              placeholder="Let's finish some work"
              required
              value={this.state.newItem}
              onChange={e => this.updateInput(e.target.value)} />
            <button
              className="add-btn"
              onClick={() => this.addItem(this.state.newItem)}
              disabled={!this.state.newItem.length}>
              &nbsp;+&nbsp;
           </button>
          </div>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      // checked={item.isDone}
                      onChange={() => { }}
                    />
                    {item.value}
                    <img src={dustbin} width="20" className="dust-pos1" border="1" alt="delete img"
                      onClick={() => this.deleteItem(item.id)} />
                    <img src={sharesocial} width="20" className="share-pos1" border="1" alt="share img"
                      onClick={() => window.open("https://api.whatsapp.com/send?phone=+917405937339&text=+{item.value}")} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;