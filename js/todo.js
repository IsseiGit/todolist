var todo = todo || {};
todo.dom = todo.dom || {};
todo.dom.todos = todo.dom.todos || {};

(function(_){

_.element = document.querySelector('.todos');

_.add = function(todo) {
// <li>要素をつくる
	var li = document.createElement('li');
	li.id = 'todo-' + todo.id;
	li.classList.add('todo');
	if(todo.done) {
		li.classList.add('todo-done');
	}

	var input = document.createElement('input');
	input.id ='todo-' + todo.id + '-checkbox';
	input.type = 'checkbox';
	input.checked = todo.done;

	var label = document.createElement('label');
	label.htmlFor = input.id;
	label.textContent = todo.title;

	var div = document.createElement('div');
	div.classList.add('todo-operation');

	var editButton = document.createElement('button');
	editButton.value = 'edit';
	editButton.classList.add('todo-operation-edit');
	editButton.textContent = '✎';

	var deleteButton = document.createElement('button');
	deleteButton.value = 'delete';
	deleteButton.classList.add('todo-operation-delete');
	deleteButton.textContent = '☓';

	div.appendChild(editButton);
	div.appendChild(deleteButton);

	li.appendChild(input);
	li.appendChild(label);
	li.appendChild(div);

	//ulに子要素としてliを追加する

	var todos = document.querySelector('.todos');
	todos.appendChild(li);

	_.isDeleteButton = function(element) {
		return element.classList.contains('todo-operation-delete');
	};

	_.remove = function(element){
		var todoElement = findTodoElement(element);
	};

	function findTodoElement(element) {
		var e = element;
		while(!!e && !e.classList.contains('todo')) {
			e = e.parentNode;
		}
		return e;
	}

};
})(todo.dom.todos);
