import React, { Component } from 'react';
import Posts from './Posts/Posts';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import NewPost from './NewPost/NewPost';
import asyncComponent from "../../hoc/asyncComponent";
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})
class Blog extends Component {
    state = { 
        auth: true
    }
    render() {
        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' activeClassName='active' activeStyle={{ color: '#fa923f' }}>Home</NavLink></li>
                            <li><NavLink to={{ pathname: '/new-post', hash: '#submit', search: '?quick-sibmit=true' }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Redirect from='/' to='/posts'/>
                </Switch>

            </div>
        );
    }
}

export default Blog;