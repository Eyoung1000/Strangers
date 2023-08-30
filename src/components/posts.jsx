import React from "react";

const COHORT_NAME = '2305-FTB-ET-WEB-PT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const TOKEN = 'YOUR_AUTH_TOKEN'; // Replace with your actual authentication token

async function fetchUserData() {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
      }
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

async function buildAppState() {
  const user = await fetchUserData();
  const posts = await fetchPosts();

  return {
    user,
    posts
  };
}

async function initializeApp() {
  try {
    const appState = await buildAppState();
    console.log('Application state:', appState);
    // Now you can use the appState to render your web app
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

initializeApp();
