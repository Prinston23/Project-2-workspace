package com.niit.dao;

import java.util.List;

import com.niit.model.BlogComment;
import com.niit.model.Blog;
import com.niit.model.User;

public interface BlogDao {

	Blog createBlog(User user, Blog blog);

	List<Blog> getAllBlogs();

	Blog getBlogById(int id);

	List<BlogComment> getBlogComments(int id);

	Blog addBlogPostComment(User user, BlogComment blogComment);
}
