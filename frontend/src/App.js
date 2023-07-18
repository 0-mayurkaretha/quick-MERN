import {useState, useEffect} from "react";
import Axios from 'axios';
import './App.css';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const  [username, setUsername] = useState("");
  
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
      console.log(response);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {name, age, username}).then((response) => {
      alert("USER CREATED!");
      setListOfUsers([...listOfUsers, {name, age, username}])
    });
  };
  
  return (
    <div className="App">
    <div>
      <input type="text" placeholder="Name..." onChange={(event) => {setName(event.target.value);}}/>
      <input type="Number" placeholder="Age..." onChange={(event) => {setAge(event.target.value);}}/>
      <input type="text" placeholder="Username..." onChange={(event) => {setUsername(event.target.value);}}/>
      <button onClick={createUser}>Create user</button>
    </div>
    <div class="table-wrap top">
    <table>
      <tbody>
          <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Username</td>
          </tr>
      </tbody>
    </table>
    </div>
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <div class="box-wrap">
                <div class="table-wrap">
                    <table>
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.username}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            
          );
        })}
      </div>
    </div>
  );
}

export default App;
