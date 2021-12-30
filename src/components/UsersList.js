import React, { useState /*, useEffect */ } from "react";
import { useList } from "react-firebase-hooks/database";
import UserDataService from "../services/UserService";
import User from "./User";

const UsersList = () => {
  // const [tutorials, setTutorials] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  /* use react-firebase-hooks */
  const [users, loading, error] = useList(UserDataService.getAll().orderBy("name", "asc"));

  /* manually listen for value events 
  const onDataChange = (items) => {
    let tutorials = [];

    items.docs.forEach((item) => {
      let id = item.id;
      let data = item.data();
      tutorials.push({
        id: id,
        title: data.title,
        description: data.description,
        published: data.published,
      });
    });

    setTutorials(tutorials);
  };

  useEffect(() => {
    const unsubscribe = TutorialDataService.getAll().orderBy("title", "asc").onSnapshot(onDataChange);

    return () => unsubscribe();
  }, []);
  */

  const refreshList = () => {
    setCurrentUser(null);
    setCurrentIndex(-1);
  };

  const setActiveUser = (user, index) => {
    const { name, password, expiry, published } = user.data();

    setCurrentUser({
      id: user.id,
      name,
      password,
      expiry,
      published,
    });

    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>User List</h4>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Loading...</span>}
        <ul className="list-group">
          { !loading &&
            users &&
             users.docs.map((user, index) => ( /* tutorials.map */
              <li
                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setActiveUser(user, index)}
                key={user.id}
              >
                { user.data().name }
                { /*tutorial.title*/ }
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentUser ? (
          <User user={currentUser} refreshList={refreshList} />
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;
