import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

interface IComment {
  onChangeC(text: string): void;
  onChangeE(email: string): void;
}

export const Comment: FunctionComponent<IComment> = ({
  onChangeC,
  onChangeE,
}) => {
  const [username, setUsername] = useState("");
  const [CC, setCC] = useState("");
  const [CN, setCN] = useState("");

  // const [password, setPassword] = useState('');



  return (
    <form className="enjoy-css-block">
      <div>
        <label style={{ paddingRight: "20px" }}>
          Course Code:
          <input
            className="enjoy-css"
            value={CC}
            onChange={(event) => setCC(event.target.value)}
            name="username"
            type="text"
          />
        </label>
        <br />
        <br />
        <label style={{ paddingRight: "20px" }}>
          Course Name:
          <input
            className="enjoy-css"
            value={CN}
            onChange={(event) => setCN(event.target.value)}
            name="username"
            type="text"
          />
        </label>
        <br />
        <br />
        <label style={{ paddingRight: "20px" }}>
          Student Email:
          <input
            className="enjoy-css"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              onChangeE(event.target.value);
            }}
            name="username"
            type="text"
          />
        </label>
        <br />
        <br />
        <label>
          Comments:
          <textarea
            className="enjoy-css"
            // value={password}
            onChange={(event) => {
             
              onChangeC(event.target.value)}}
            name="password"
          />
        </label>
        <br />
        <br />
        <br />
        <Link to={"/thankyou"}>
          <button className="enjoy-css-button">Submit</button>
        </Link>
      </div>
    </form>
  );
};
