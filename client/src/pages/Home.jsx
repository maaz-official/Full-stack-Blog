import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getPosts');
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  // Group posts by category
  const groupedPosts = {};
  posts.forEach((post) => {
    if (!groupedPosts[post.category]) {
      groupedPosts[post.category] = [];
    }
    groupedPosts[post.category].push(post);
  });

  // Select top 3 posts for each category
  const topThreePostsPerCategory = Object.values(groupedPosts).map((categoryPosts) =>
    categoryPosts.slice(0, 3)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          showThumbs={false}
          dynamicHeight={true}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          {topThreePostsPerCategory.flat().map((post) => (
            <div key={post._id}>
              <img src={post.image} alt={post.title} className="object-cover h-96" />
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                <h3 className="text-3xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-lg text-gray-300">{post.excerpt}</p>
                <Link to={`/post/${post.slug}`} className="inline-block mt-4 text-lg font-medium text-teal-100 hover:text-teal-200 transition duration-300">Read more</Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <h2 className="mb-6 text-center text-3xl sm:text-4xl font-bold">Recent Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topThreePostsPerCategory.flat().map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md p-4">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
            <Link to={`/search?category=${post.category}`} className="inline-block text-xs bg-teal-500 text-white py-1 px-3 rounded-md font-bold uppercase tracking-wide hover:bg-teal-600 transition duration-300">
              {post.category}
            </Link>
            <Link to={`/post/${post.slug}`} className="block mt-4 text-sm font-medium text-teal-600 hover:text-teal-700 transition duration-300 flex items-center">
              Read more
              <svg className="w-4 h-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/search" className="text-lg text-teal-500 hover:underline">
          Explore More Posts
        </Link>
      </div>
    </div>
  );
}
