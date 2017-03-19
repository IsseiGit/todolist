(function(){
	todo.dom.newTodo.element.addEventListener('keydown',onNewTodokeydown);

	function onNewTodokeydown(event){
		if(event.keyCode !== 13) {
			return;
		}
var creatingTodo = todo.dom.newTodo.getTodo();
		todo.dom.todos.add(creatingTodo);
		todo.dom.newTodo.clear();
	}

	todo.dom.todos.element.addEventListener('click',onTodosClick);

	function onTodosClick(event){
		if(todo.dom.todos.isDeleteButton(event.target)) {
			onDeletButtonClick(event);
		} else if (todo.dom.todos.isEditButton(event.target)) {
			onEditButtonClick(event);
		}
	}

	function onEditButtonClick(event){
		todo.dom.todos.setEditing(event.target,true); //編集可能モードにする
		todo.dom.todos.focusToEditor(event.target);
	}

	function onDeleteButtonClick(event){
		if(!confirm('Do you really want to remove the todo?')) {
			return; //キャンセルを押したら何もしない
		}
		todo.dom.remove(event.target);
	}


})();
