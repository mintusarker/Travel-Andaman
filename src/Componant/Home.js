import React from 'react';
import Header from './Header/Header';
import Tour from './packages/Tour';
import Beach from './Beach/Beach';
import Activities from './Activites/Activities';
import Travel from './Travel/Travel';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Tour></Tour>
            <Beach></Beach>
            <Activities></Activities>
            <Travel></Travel>
            <Contact></Contact>
        </div>
    );
};

export default Home;