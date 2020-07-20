export interface Project {
  id: number;
  projectName: string;
  tasks: Task[];
  priority: 'high' | 'medium' | 'low';
}

export interface Task {
  taskName: string;
}
