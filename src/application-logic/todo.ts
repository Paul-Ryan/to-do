interface Props {
  description: string;
}

export type ToDo = {
  description: string;
  done: boolean;
};

// factory function to create to dos
const buildToDo = ({ description }: Props): ToDo => {
  return { description, done: false };
};

export default buildToDo;
