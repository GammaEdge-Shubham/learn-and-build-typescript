type Todo = {
  name: string;
  description: string;
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  name: "Take medicines",
  description: "Time to take a medicine for Vitamin C",
};

const todo2 = updateTodo(todo1, { description: "Taken" });
console.log(todo1);
console.log(todo2);

const fetchData = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetched");
    }, 2000);
  });
};

const data: Awaited<Promise<string>> = await fetchData();
console.log(data);

export {};
