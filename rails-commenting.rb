# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# defines a controller class named 'BlogPostsController' that inherits from the 'ApplicationController' class.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # is used to retrieve all the records from the BlogPost model and assign them to an instance variable @posts
    # method is a query method provided by the Rails framework, specifically ActiveRecord, which is an ORM (Object-Relational Mapping).
    @posts = BlogPost.all
  end

  # ---3)
  # purpose of the show method is to retrieve and display the details of a specific blog post.
  # In the show method, the line @post = BlogPost.find(params[:id]) retrieves the specific blog post record from the database and assigns it to the instance variable @post. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # the new method is to initialize a new instance of the BlogPost model.
  # BlogPost.new creates a new, unsaved instance of the BlogPost model.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # In the line @post = BlogPost.create(blog_post_params), the create method is called on the BlogPost model.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # purpose of '@post = BlogPost.find(params[:id])' is to locate and retrieve a specific blog post record from the database.
    # 'params[:id]' defines the value of the id param passed in the URL.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #  purpose of @post.update(blog_post_params) is to modify the attributes of a specific blog post record.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # purpose of redirect_to blog_posts_path is to redirect the user's browser to a particular URL, in this case, the URL associated with the blog_posts_path. 
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # a method indicating that it is an internal implementation detail and should not be directly accessed or relied upon by external code.
  private
  def blog_post_params
    # ---10)
    # purpose of params.require(:blog_post).permit(:title, :content) is to ensure that only specified attributes of the blog_post object are permitted for mass assignment.
    # params refers to the parameters received in an HTTP request made to the Rails application.
    params.require(:blog_post).permit(:title, :content)
  end
end
