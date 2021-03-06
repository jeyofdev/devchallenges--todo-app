import React from 'react';
import Navbar from '../Navbar/Navbar';
import H1 from '../../components/Ui/Styles/H1';
import Form from '../Form/Form';
import TodoList from '../Todo/TodoList/TodoList';

const Page = () => {
    return (
        <>
            <H1
                fontSize="2.25rem"
                textAlign="center"
                textTransform="capitalize"
                marginBottom="58px"
            >
                #todo
            </H1>

            <Navbar />

            <Form />

            <TodoList />
        </>
    );
};

export default Page;
