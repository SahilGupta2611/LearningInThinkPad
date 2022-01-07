import React from "react";
import classes from "./Users.module.css";

const USERS = [
  {
    name: "Sahil Gupta",
    profile_url:
      "https://media-exp1.licdn.com/dms/image/C4E03AQHnq2giojtMuA/profile-displayphoto-shrink_400_400/0/1621141164482?e=1644451200&v=beta&t=Td36rCRuu35lIQ1YhZSZpCZf7pb9tnN5OlzfVBj5dxw",
    designation: "React Developer",
    employee_id: "002SAE744",
    email_id: "sahil.gupta4@ibm.com",
  },

  {
    name: "Ankesh Gautam",
    profile_url:
      "https://media-exp1.licdn.com/dms/image/C4E03AQHkahvUXO0JIA/profile-displayphoto-shrink_400_400/0/1560183341547?e=1644451200&v=beta&t=GZxFR9En5xtmEnWr5u-Yi9quhXojbyd9y-QisHOzWmQ",
    designation: "Full Stack Developer",
    employee_id: "981ORC744",
    email_id: "Ankesh.Gautam@oracle.com",
  },
  {
    name: "Abhay Bhardwaj",
    profile_url:
      "https://media-exp1.licdn.com/dms/image/C5603AQHQh3hDIIAWLA/profile-displayphoto-shrink_400_400/0/1616767989673?e=1644451200&v=beta&t=XLCx0mQtIXfQ617NO-xz-Fzj5YfksiLTCPYzJWfK6PM ",
    designation: "Backend Developer",
    employee_id: "675ZFQ744",
    email_id: "Abhay@zf.com",
  },
  {
    name: "Bhusan Jain",
    profile_url:
      "https://media-exp1.licdn.com/dms/image/C4E03AQF1yWiBGdOM_A/profile-displayphoto-shrink_400_400/0/1595312812780?e=1644451200&v=beta&t=ScyV7nXqJ1NppTO_8pkf2WJMbFjuu7cSR7Kyqmku8ZY",
    designation: "Dotnet Developer",
    employee_id: "267COG744",
    email_id: "Bhusan.Jain@cognizant.com",
  },

  {
    name: "Vivek Vasisht",
    profile_url:
      "https://media-exp1.licdn.com/dms/image/C5603AQE6zUZbKoUJQQ/profile-displayphoto-shrink_400_400/0/1590577927732?e=1644451200&v=beta&t=FK3dSYuw4a2rd6_hcTgm4mHeXEWnnOUK5OdvcSZrJrE",
    designation: "Vice President",
    employee_id: "981ORC744",
    email_id: "Vivek.Vasisht@oppo.com",
  },
  {
    name: "Akshay Singh",
    profile_url:
      "https://media-exp1.licdn.com/dms/image/C5603AQHCDKfaR8BAkQ/profile-displayphoto-shrink_400_400/0/1635193362173?e=1644451200&v=beta&t=x5C4xQa6UaRuVg0tMMKbry6ktnMGI0kcbV0Hpd8CaQw",
    designation: "SQL Developer",
    employee_id: "675ZFQ744",
    email_id: "Akshay.Singh@Dias.com",
  },
];

function Users(props) {
  console.log("sasjan");
  return (
    <>
      <div className={classes["user-container"]}>
        {USERS.map((user) => {
          return (
            <div className={classes["user-box"]}>
              <img
                src={user.profile_url}
                className={classes.profile}
                alt={user.name}
                srcset=""
              />
              <hr />
              <h4>{user.name}</h4>
              <h4>{user.email_id}</h4>
              <h4>{user.employee_id}</h4>
              <h4>{user.designation}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;
