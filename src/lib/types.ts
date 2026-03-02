
export type UserRole = 'worker' | 'hirer' | 'admin';

export type TaskStatus = 
  | 'draft' 
  | 'funded' 
  | 'assigned' 
  | 'in-progress' 
  | 'submitted' 
  | 'approved' 
  | 'completed' 
  | 'disputed' 
  | 'resolved';

export type RiskLevel = 'low' | 'medium' | 'high';

export interface TimelineEvent {
  id: string;
  status: TaskStatus;
  label: string;
  timestamp: string;
  description: string;
}

export interface Artifact {
  id: string;
  name: string;
  type: 'file' | 'link' | 'code';
  url: string;
  submittedBy: string;
  timestamp: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  reputation?: number;
  joinedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  riskLevel: RiskLevel;
  status: TaskStatus;
  hirerId: string;
  workerId?: string;
  submissionUrl?: string;
  disputeReason?: string;
  createdAt: string;
  timeline: TimelineEvent[];
  artifacts: Artifact[];
}

export interface AppState {
  currentUser: User | null;
  tasks: Task[];
  users: User[];
}
