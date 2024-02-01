import './style.css';

import { localStore, projects } from './local';
import { newProject, updateSidebar, show } from './updateDOM';
import { listeners } from './updateDOM';
import { Project } from './newProject';
import { ToDoItem, getTasks } from './newToDo';
import { validate } from './validateInput';

//date-fns
import { format } from "date-fns";