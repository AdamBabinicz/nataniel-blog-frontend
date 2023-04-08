import { useParams, Link } from "react-router-dom";
import "./category.css";
import PostList from "../../components/posts/PostList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsBasedOnCategory } from "../../redux/apiCalls/postApiCall";

const Category = () => {
  const dispatch = useDispatch();
  const { postsCate } = useSelector((state) => state.post);

  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchPostsBasedOnCategory(category));
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <section className="category">
      {postsCate.length === 0 ? (
        <>
          <h2 className="category-not-found">
            Postów z tematem <span>{category}</span> nie znaleziono
          </h2>
          <Link to="/posts" className="category-not-found-link">
            Przejdź do strony postów
          </Link>
        </>
      ) : (
        <>
          <h2 className="category-title">Wpis oparty na temacie: {category}</h2>
          <PostList posts={postsCate} />
        </>
      )}
    </section>
  );
};

export default Category;
