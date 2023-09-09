import React from 'react';
import Card from '../UI/Card';
import classes from './UserDataList.module.css';

const UserDataList = (props) => {
    return (
        <Card className={classes.Card}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old) {user.college}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserDataList;