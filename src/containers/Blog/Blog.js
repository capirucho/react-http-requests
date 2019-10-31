import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Ronald'
                };
            });
            this.setState({posts: updatedPosts})
            //console.log(response); 
        });
    }

    render () {

        const updatedPosts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author} />;
        });

        return (
            <div>
                <section className={classes.Posts}>
                 {updatedPosts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;