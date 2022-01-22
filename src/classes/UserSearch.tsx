import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSeacrhProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSeacrhProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  }

  handleUserSearch = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });

    this.setState({ name: '' });
  }

  render() {
    const { user, name } = this.state;

    return <div>
      <h1>User Seacrh</h1>
      <input value={name} onChange={(e) => this.setState({name: e.target.value})} />
      <button onClick={this.handleUserSearch}>Find users</button>
      <h2>Founded user</h2>
      {
        user ? (
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </div>
        ) : <p>User not found</p>
      }
    </div>
  } 
}

export default UserSearch;