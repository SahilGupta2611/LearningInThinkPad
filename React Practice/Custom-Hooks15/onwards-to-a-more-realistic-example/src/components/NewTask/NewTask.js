import { useState } from "react";
import useHttp from "../Hooks/use-http";

import Section from "../UI/Section";

import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTask } = useHttp();

  const createTask = (taskText, data) => {
    console.log(data);
    const generatedId = data.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTask(
      {
        url: "https://react-http-4f560-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        Headers: { "Content-Type ": "application/json" },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
