import React from 'react';
import Navbar from '../../components/Ui/Navbar/Navbar';
import H1 from '../../components/Ui/Styles/H1';

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
        </>
    );
};

export default Page;
