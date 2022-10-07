import React, { useState } from "react";

const HookObjecst = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "" });
    const firstNameHandler = (event) => {
        //when you using object in state, you should get a clone or copy of object to save previose data
        //in react and javascript, for cloning object use ... and name of object => Example : ...user
        //if you forget to clone a object, after update state, all prev data remove
        setUser({ ...user, firstName: event.target.value });
    };
    const lastNameHandler = (event) => {
        setUser({ ...user, lastName: event.target.value });
    };
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={user.firstName}
                    name="firstName"
                    onChange={firstNameHandler}
                />
                <input
                    type="text"
                    value={user.lastName}
                    name="lastName"
                    onChange={lastNameHandler}
                />
                <h2>My First Name is : {user.firstName}</h2>
                <h2>My Last Name is : {user.lastName}</h2>
                <div>{JSON.stringify(user)};</div>
            </form>
        </div>
    );
};

export default HookObjecst;
