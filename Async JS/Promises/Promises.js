const promise = new Promise((resolve, reject) => {
	setTimeout (() => resolve(math.random()), 5000);
});

console.log(Promise);
promise
	.then(x => {console.log(x);
	 return x;
	})
	.then(y => console.log(y))
	.catch(err => console.log(err));

	promise.then(z => console.log(z)); //! даже при повторном вызове  мы получим это же значение//




	function getPosts (id) {
		return new Promise ((resolve, reject) => {
			myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`,
			 (err, res) => {
				if (err) {
					reject(err);
				}
				resolve(res);
			})
		});
	}

	function getPostComments(post) {
		const { id } = post;
		return new Promise ((resolve, reject) => {
			myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`,
			 (err, res) => {
				if (err) {
					reject(err);
				}
				resolve({ post, comments: res });
			},
			);
		});
	}

	function getUserCreatePost(data) {
		const {
			post: { userId }, 
		} = data;
		return new Promise ((resolve, reject) => {
			myHttp.get(`https://jsonplaceholder.typicode.com/users/${userId}`, 
			(err, res) => {
				if (err) {
					reject(err);
				}
				resolve({ ...data, user: res });
			},
			);
		});
	}

	getPosts(50)
		.then(post => getPostComments(post))
		.then(data => getUserCreatePost(data))
		.then(fulldata => console.log(fulldata))
		.catch(err => console.log(err))
		.finally(() => console.log('finally')); //! независимое действие которое выполниться в любом случае//


//*Способ вызова множества промисов*//
	Promise.all([
		getPosts(1),
		getPostComments(1),
		getUserCreatePost(1)
	])
	.then(fulldata => console.log(fulldata))
	.catch(err => console.log(err));