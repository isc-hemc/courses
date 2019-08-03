import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import FullPost from '@/containers/Blog/FullPost/FullPost';
import NewPost from '@/containers/Blog/NewPost/NewPost';
import Posts from '@/containers/Blog/Posts/Posts';
import Navbar from '@/components/Navbar/Navbar';

const appRouter = () => {
    return (
        <Router>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Switch>
                    <Route path='/' exact component={Posts} />
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts/:id' component={FullPost} />
                    <Redirect from='*' to='/' />
                </Switch>
            </main>
        </Router>
    );
}

export default appRouter;