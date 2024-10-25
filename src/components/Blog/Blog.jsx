import React, { useState } from "react";
import styles from "./Blog.module.css";

const posts = [
  {
    id: 1,
    title: "Introduction to React",
    date: "October 1, 2024",
    description: `React is a JavaScript library for building user interfaces. 
                  It allows developers to create large web applications that 
                  can update and render efficiently in response to changing data. 
                  In this blog post, we'll cover how React works and its core concepts...`,
    fullDescription: `React is a JavaScript library for building user interfaces. 
                  It allows developers to create large web applications that 
                  can update and render efficiently in response to changing data. 
                  In this blog post, we'll cover how React works and its core concepts, 
                  including JSX, components, props, and state management. 
                  This article is perfect for beginners who are new to React or those 
                  looking to brush up on the basics.`,
  },
  {
    id: 2,
    title: "CSS Modules in React",
    date: "October 5, 2024",
    description: `CSS Modules are a great way to write scoped CSS for components in React. 
                  This technique helps avoid naming conflicts and allows better maintenance. 
                  Let’s explore how to integrate CSS Modules into your React project...`,
    fullDescription: `CSS Modules are a great way to write scoped CSS for components in React. 
                  This technique helps avoid naming conflicts and allows better maintenance. 
                  In this blog post, we’ll dive deep into the benefits of CSS Modules, how 
                  they work, and why they make managing CSS easier for larger applications. 
                  We'll also touch on setting up CSS Modules with tools like Webpack and best 
                  practices for structuring styles in your React app.`,
  },
  {
    id: 3,
    title: "Deploying React Apps",
    date: "October 10, 2024",
    description: `Once you've built your React app, it's time to deploy it! 
                  In this post, we’ll cover the steps to deploy your app on popular platforms 
                  like Netlify, Vercel, and GitHub Pages. Let's get started...`,
    fullDescription: `Once you've built your React app, it's time to deploy it! In this post, 
                  we’ll cover the steps to deploy your app on popular platforms like Netlify, 
                  Vercel, and GitHub Pages. We'll also explore different deployment methods, 
                  such as static site generation and server-side rendering, to optimize your 
                  app’s performance. Whether you're deploying a personal portfolio or a large 
                  web application, this guide will help ensure that your app is accessible to 
                  users worldwide.`,
  },
];

export const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState({});

  // Function to toggle the description
  const toggleReadMore = (id) => {
    setExpandedPosts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className={styles.blogSection} id="blog">
      <h2 className={styles.blogTitle}>Blog</h2>
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <h3>{post.title}</h3>
            <p className={styles.date}>{post.date}</p>
            <p>
              {expandedPosts[post.id] ? post.fullDescription : post.description}
              <span
                className={styles.readMore}
                onClick={() => toggleReadMore(post.id)}
              >
                {expandedPosts[post.id] ? " Show Less" : " Read More"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
