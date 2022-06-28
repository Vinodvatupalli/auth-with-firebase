import React from 'react';

const Home= ({handleLogout}) =>{
    return(
        <section className="Home">
            <nav>
               <h2>Welcome User</h2> 
               <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
};
export default Home;