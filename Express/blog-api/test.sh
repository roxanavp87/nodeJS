# add a new post 
curl -H "Content-Type: application/json" -X POST -d '{"name": "new post", "url": "http://my-post.com", "text":"this is ..."}'  "http://localhost:3000/posts" 

# update a post at a specified id
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "updated post", "url": "http://my-post.com", "text":"this is an updated post ..."}'  "http://localhost:3000/posts/0" 

# get posts
curl "http://localhost:3000/posts" 

# deletes a post
curl -X DELETE "http://localhost:3000/posts/0" 