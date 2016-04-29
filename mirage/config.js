export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */

  let posts = [
        { type: 'posts', 
          id: 1, 
          attributes: {title: 'Zelda'},
          relationships: {
            comments: {
              links: {
                related: '/post/1/comments'
              }
            }
          }

        },
        {type: 'posts', id: 2, attributes: {title: 'Link'}},
        {type: 'posts', id: 3, attributes: {title: 'Epona'}},
      ];

  let comments = [
    { type: 'comments', 
      id: 1, 
      attributes: {text: 'lorem ipsum'},
      relationships: {
        author: {
          links: {
            related: '/comments/1/author'
          }
        }
      }
    },
    { type: 'comments', 
      id: 2, 
      attributes: {text: 'lorem ipsum2'},
      relationships: {
        author: {
          links: {
            related: '/comments/2/author'
          }
        }
      }      
    },
  ];

  let postComments = [
    [comments[0], comments[1]],
    [],
    [comments[1]]
  ];

  let authors = [
    {type: 'authors', id: 1, attributes: {name: 'J.R.R. Tolkien'}},
    {type: 'authors', id: 2, attributes: {name: 'Stephen King'}},
  ];

  let commentAuthor = [
    authors[0],
    authors[1]
  ];

  /* ========== URLs ========== */

  this.get('/posts', () => {
    return {
      data: posts
    };
  });

  this.get('/posts/:id', (schema, request) => {

    let id = request.params.id;
    id--;
    return {
      data: posts[id]
    };
  });

  this.get('/comments/:id', (schema, request) => {

    let id = request.params.id;
    id--;
    return {
      data: comments[id]
    };
  });

  this.get('/post/:id/comments', (schema, request) => {

    let id = request.params.id;
    id--;
    return {
      data: postComments[id]
    };
  });

  this.get('/comments/:id/author', (schema, request) => {

    let id = request.params.id;
    id--;
    return {
      data: commentAuthor[id]
    };
  });

  this.get('/authors', (schema, request) => {
    return {
      data: authors
    }
  });      
}
