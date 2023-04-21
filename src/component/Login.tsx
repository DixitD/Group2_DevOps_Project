import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

interface ILoginProps {}

export const Login: FunctionComponent<ILoginProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (

      <form
        className="enjoy-css-block"      >
        <div>
          <label style={{ paddingRight: "20px" }}>Email:</label>
          <input
            className="enjoy-css"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            name="username"
            type="text"
          />

          <br />
          <br />
          <label>
            Password:
            <input
              className="enjoy-css"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              type="password"
            />
          </label>
          <br />
          <br />
          <br />
          <Link to={"/comment"}>
            <button className="enjoy-css-button">Login</button>
          </Link>
        </div>
      </form>
  );
};
