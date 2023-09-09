import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper"
import ErrorModal from "../UI/ErrorModal"
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef(); // Add a ref for the college name input
    const [error, setError] = useState();

    const HandleAddUser = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredCollegeName = collegeInputRef.current.value; // Get the college name input value

        if (
            enteredName.trim().length === 0 ||
            enteredUserAge.trim().length === 0 ||
            enteredCollegeName.trim().length === 0 
        ) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid username, age, and college name (non-empty values).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = ''; // Clear the college name input
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={HandleAddUser}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <label htmlFor="college">College Name</label>
                    <input
                        id="college"
                        type="text"
                        ref={collegeInputRef}
                    />
                    <Button type="submit">Add User Info</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;