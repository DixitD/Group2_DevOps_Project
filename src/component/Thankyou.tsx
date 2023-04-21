import { FunctionComponent } from "react";

interface IThankyou {
  email: string;
  comment: string;
}

export const Thankyou: FunctionComponent<IThankyou> = ({ email, comment }) => {
  return (
    <>
      <h1>Thank you {email}</h1>
      <br />
      <p>we appreciate your comments: {comment}</p>
    </>
  );
};
