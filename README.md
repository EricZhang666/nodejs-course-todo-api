# nodejs-course-todo-api
<h3>Node.JS + MongoDB</h3>
            <p>Register: POST /api/v1/users <br /><span>body: email, password;</span></p>
            <p>Login: POST /api/v1/login <br /><span>body: email, password;</span></p> 
            <p>Log out: DELETE /api/v1/logout <br /><span>header: x-auth=token;</span></p>
            <p>Add todo: POST /api/v1/todos <br /><span>header: x-auth=token; body: text</span></p>
            <p>View todos: GET /api/v1/todos <br /><span>header: x-auth=token;</span></p>
            <p>Update todo: PATCH /api/v1/todos/:id <br /><span>header: x-auth=token; body: text, completed</span></p>
            <p>Delete todo: DELETE /api/v1/todos/:id <br /><span>header: x-auth=token;</span></p>
            <p><a href="https://github.com/EricZhang666/nodejs-course-todo-api">Github repository</a></p>
            <p>© 2018 Lizhong Zhang All Rights Reserved</p>
