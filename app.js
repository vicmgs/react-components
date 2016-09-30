class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }
  onEnter() {
    this.setState({
      done: true
    });
  }
  onLeave() {
    this.setState({
      done: false
    });
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onMouseEnter={this.onEnter.bind(this)} onMouseLeave={this.onLeave.bind(this)}>{this.props.item}</li>
    );
  }
}

var GList = (props) => (
  <ul>
    {props.items.map(todo =>
      <TodoListItem item={todo} />
    )}
  </ul>
);

var FullList = () => (
  <div>
    <p>My List</p>
    <GList items={['apple','poo']}/>
    <GList items={['apple1','peach1','pear1']}/>
  </div>
);





ReactDOM.render(<FullList />, document.getElementById("app"));
