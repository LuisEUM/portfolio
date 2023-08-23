'use client'
import { useState, useEffect } from 'react';

export const apiMedium = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40leonelkrea');
        const data = await response.json();
        setPosts(data.items);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setPosts([]);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, isLoading };
};