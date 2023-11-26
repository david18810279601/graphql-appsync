<template>
  <div class="tasks">
    <h1>運用任務</h1>
    <input v-model="taskname" placeholder="新しい運用タスクを作成" class="input">
    <button @click="createTask()" class="taskButton">新規</button>
    <ul>
      <li v-for="task in tasks" :key="task.id" class="task">
        <p class="text">{{ task.name }}</p>
        <p @click="toggleComplete(task)" class="text button">{{ task.completed ? '完了した' : '未完了の' }}</p>
        <p @click="deleteTask(task)" class="text button delete">運用タスクを削除する</p>
      </li>
    </ul>
  </div>
</template>

<script>
import ListTasks from '../queries/ListTasks'
import CreateTask from '../mutations/CreateTask'
import DeleteTask from '../mutations/DeleteTask'
import UpdateTask from '../mutations/UpdateTask'
import uuidV4 from 'uuid/v4'
export default {
  name: 'Tasks',
  methods: {
    toggleComplete(task) {
      const input = {
        ID: task.ID,  // 使用 task.ID
        name: task.name,  // 包含 name，即使未更改
        completed: !task.completed  // 切换 completed 状态
      };

      this.$apollo.mutate({
        mutation: UpdateTask,
        variables: { input },  // 使用 { input } 替代 updatedTask
        update: (store, { data: { updateTask } }) => {
          const data = store.readQuery({ query: ListTasks });
          const index = data.listTasks.items.findIndex(item => item.ID === updateTask.ID);  // 使用 updateTask.ID
          data.listTasks.items[index] = updateTask;
          store.writeQuery({ query: ListTasks, data });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateTask: {
            __typename: 'Task',
            ...input  // 使用 input 构建乐观响应
          }
        },
      })
        .then(data => console.log('Task updated:', data))
        .catch(error => console.error('Error updating task:', error));
    },
    deleteTask(taskToDelete) {
      console.log('Received task for deletion:', taskToDelete);
      if (!taskToDelete || !taskToDelete.ID) {  // 确保使用 taskToDelete.ID
        console.error('Task or task ID is undefined.');
        return;
      }
      console.log('Deleting task with ID:', taskToDelete.ID); // 使用 taskToDelete.ID

      this.$apollo.mutate({
        mutation: DeleteTask,
        variables: {
          id: taskToDelete.ID  // 使用 taskToDelete.ID
        },
        update: (store, { data: { deleteTask } }) => {
          const data = store.readQuery({ query: ListTasks });
          data.listTasks.items = data.listTasks.items.filter(task => task.ID !== deleteTask.ID); // 使用 task.ID
          store.writeQuery({ query: ListTasks, data });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          deleteTask: {
            __typename: 'Task',
            ID: taskToDelete.ID  // 使用 taskToDelete.ID
          }
        },
      })
        .then(data => console.log('Deleted task:', data))
        .catch(error => console.error('Error deleting task:', error));
    },
    createTask() {
      console.log("Creating task...");
      const taskname = this.taskname;
      if (!taskname) {
        alert('Please create a task');
        return;
      }
      this.taskname = '';
      const id = uuidV4();
      const createtaskinput = {
        name: taskname,
        ID: id,
        completed: false
      };
      this.$apollo.mutate({
        mutation: CreateTask,
        variables: { createtaskinput },
        update: (store, { data: { createTask } }) => {
          const data = store.readQuery({ query: ListTasks });
          if (!data.listTasks.items.find(item => item.ID === createTask.ID)) {
            data.listTasks.items.push(createTask);
          }
          store.writeQuery({ query: ListTasks, data });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createTask: {
            __typename: 'Task',
            ...createtaskinput
          }
        },
      })
        .then(data => console.log('Task created:', data))
        .catch(error => console.error("Error creating task:", error));
    }
  },
  data () {
    return {
      taskname: '',
      tasks: []
    }
  },
  apollo: {
    tasks: {
      query: () => ListTasks,
      update: data => data.listTasks.items
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
.taskButton {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #2196F3;
  border: none;
  color: white;
  outline: none;
}
.input {
  width: 100%;
  padding: 8px;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid #2196F3;
  outline: none;
}
.button {
  cursor: pointer;
}
.button:hover {
  opacity: 0.5
}
.text {
  margin-top: 4px;
  margin-bottom: 0px;
}
.delete {
  color: #2196F3;
}
.task {
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  padding-top: 8px;
  padding-bottom: 9px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
