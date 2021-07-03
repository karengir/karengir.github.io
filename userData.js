let userData = '';
const content = document.querySelector('#userList');
const userposts = document.querySelector('#userPosts');

const fetch_User_data = () => {
    fetch(' https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            userDataChange(json)
        });
};

fetch_User_data();

const userDataChange = (data) => {
    userData = data
    userData.forEach(user => {
        let user_row = ""
        user_row += '<tr>'
        user_row += `<td>${user.name}</td>`
        user_row += `<td>${user.email}</td>`
        user_row += `<td> <button onClick="get_users_posts(${user.id})">Posts</button> </td>`
        user_row += '</tr>'
        content.innerHTML += user_row
    })
}

const get_users_posts = (user_id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
        .then((response) => response.json())
        .then((json) => {
            userPostChange(json)
        });

}

const userPostChange = (posts) => {
    userposts.innerHTML = ""
    posts.forEach(post => {
        let user_post = `
        <div class="card column" id="post_card">
        <div class="card-header">
            <h3>${post.title}</h3>
        </div>
        <div class="container">
            <p>${post.body}</p>
        </div>
    </div>`
        userposts.innerHTML += user_post
    })
}