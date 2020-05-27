import React from 'react';
import '../../style/blog-styles.scss';
import '../../style/blog-item-styles.scss';
import {Link} from 'react-router-dom';
import striptags from 'striptags';
import Truncate from 'react-truncate';

const BlogItem = props => {
  const {id, blog_status, content, title, featured_image_url} = props.blogItem;

  return (
    <div>
      <Link to={`/b/${id}`}>
        <h2 className="blogtitles-item">{title}</h2>
      </Link>

      <div className="blogDescription">
        <Truncate
          lines={5}
          ellipsis={<Link id="read-more" to={`/b/${id}`}>...Read more</Link>}
        >
          {striptags (content)}

        </Truncate>

      </div>
    </div>
  );
};

export default BlogItem;
