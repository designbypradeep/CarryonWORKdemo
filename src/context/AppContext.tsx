"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Task, AppState, UserRole, TaskStatus, Artifact, TimelineEvent } from '@/lib/types';

interface AppContextType extends AppState {
  login: (email: string, role: UserRole) => void;
  logout: () => void;
  updateTaskStatus: (taskId: string, status: TaskStatus, additionalData?: Partial<Task>) => void;
  createTask: (task: Omit<Task, 'id' | 'createdAt' | 'timeline' | 'artifacts'>) => void;
  updateUserStatus: (userId: string, status: 'approved' | 'rejected') => void;
  addArtifact: (taskId: string, artifact: Omit<Artifact, 'id' | 'timestamp'>) => void;
  assignWorker: (taskId: string, workerId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_USERS: User[] = [
  { id: 'u1', name: 'Arjun Mehta', email: 'arjun@worker.in', role: 'worker', reputation: 94, joinedAt: 'Oct 2023', status: 'approved' },
  { id: 'u2', name: 'Tata Digital Solutions', email: 'billing@tata.com', role: 'hirer', joinedAt: 'Nov 2023', status: 'approved' },
  { id: 'u3', name: 'Karan Sharma', email: 'karan@carryon.work', role: 'admin', joinedAt: 'Jan 2023', status: 'approved' },
  { id: 'u4', name: 'Reliance Industries', email: 'ops@reliance.com', role: 'hirer', joinedAt: 'Dec 2023', status: 'approved' },
  { id: 'u5', name: 'Vikram Malhotra', email: 'vikram@devs.in', role: 'worker', reputation: 88, joinedAt: 'Aug 2023', status: 'approved' },
  { id: 'u6', name: 'Anjali Rao', email: 'anjali@ui.in', role: 'worker', reputation: 72, joinedAt: 'Feb 2024', status: 'approved' }
];

const INITIAL_TASKS: Task[] = [
  { 
    id: 'T-9201', 
    title: 'UPI 2.0 Recurring Payment Integration', 
    description: 'Implement UPI Autopay flows for a subscription-based logistics dashboard. Requirements include mandate creation, execution, and failure handling.', 
    budget: 125000, 
    deadline: '2024-06-25', 
    riskLevel: 'high', 
    status: 'in-progress', 
    hirerId: 'u2', 
    workerId: 'u1', 
    createdAt: '2024-05-18',
    timeline: [
      { id: 'ev1', status: 'funded', label: 'Vault Staked', timestamp: '2024-05-18 10:00', description: '₹1,25,000 locked in escrow.' },
      { id: 'ev2', status: 'assigned', label: 'Agent Matched', timestamp: '2024-05-19 14:20', description: 'Arjun Mehta matched via Skill Mesh.' }
    ],
    artifacts: [
      { id: 'art1', name: 'System Architecture.pdf', type: 'file', url: '#', submittedBy: 'u1', timestamp: '2024-05-20' }
    ]
  },
  {
    id: 'T-8842',
    title: 'Next.js 15 Dashboard Refactor',
    description: 'Refactor existing legacy React dashboard to Next.js 15 App Router with focus on Server Components and optimized hydration.',
    budget: 85000,
    deadline: '2024-06-10',
    riskLevel: 'medium',
    status: 'submitted',
    hirerId: 'u2',
    workerId: 'u1',
    createdAt: '2024-05-10',
    timeline: [
      { id: 't1', status: 'funded', label: 'Vault Staked', timestamp: '2024-05-10', description: 'Budget secured.' },
      { id: 't2', status: 'assigned', label: 'Assigned', timestamp: '2024-05-11', description: 'Developer onboarded.' },
      { id: 't3', status: 'submitted', label: 'Artifact Sync', timestamp: '2024-05-28', description: 'Codebase submitted for audit.' }
    ],
    artifacts: [
      { id: 'a1', name: 'Production_Build_v1.zip', type: 'file', url: '#', submittedBy: 'u1', timestamp: '2024-05-28' }
    ]
  },
  {
    id: 'T-7710',
    title: 'Cloud Security Audit - AWS Node',
    description: 'Comprehensive penetration testing and IAM policy audit for a multi-region VPC setup.',
    budget: 210000,
    deadline: '2024-05-30',
    riskLevel: 'high',
    status: 'completed',
    hirerId: 'u4',
    workerId: 'u5',
    createdAt: '2024-04-15',
    timeline: [
      { id: 'tr1', status: 'completed', label: 'Final Settlement', timestamp: '2024-05-25', description: 'Vault cleared. Funds released.' }
    ],
    artifacts: [
      { id: 'ar2', name: 'Vulnerability_Report.pdf', type: 'file', url: '#', submittedBy: 'u5', timestamp: '2024-05-20' }
    ]
  },
  {
    id: 'T-4490',
    title: 'AI Product Image Generation (Imagen 4)',
    description: 'Create high-fidelity product images for an e-commerce catalog using GenAI prompting techniques.',
    budget: 45000,
    deadline: '2024-06-05',
    riskLevel: 'low',
    status: 'disputed',
    hirerId: 'u4',
    workerId: 'u6',
    createdAt: '2024-05-22',
    disputeReason: 'Images generated do not match the brand guidelines provided in the brief. Artifacts are unusable.',
    timeline: [
      { id: 'd1', status: 'disputed', label: 'Conflict Logged', timestamp: '2024-05-30', description: 'Hirer initiated dispute protocol.' }
    ],
    artifacts: [
      { id: 'ar3', name: 'Output_Samples.zip', type: 'file', url: '#', submittedBy: 'u6', timestamp: '2024-05-29' }
    ]
  },
  {
    id: 'T-3321',
    title: 'Bento-Grid Portfolio Design',
    description: 'Design a professional portfolio for a high-end architectural firm using a modern grid system.',
    budget: 25000,
    deadline: '2024-07-01',
    riskLevel: 'low',
    status: 'draft',
    hirerId: 'u4',
    createdAt: '2024-05-29',
    timeline: [
      { id: 'dr1', status: 'draft', label: 'Draft Initialized', timestamp: '2024-05-29', description: 'Requirements being finalized.' }
    ],
    artifacts: []
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);

  useEffect(() => {
    const savedUser = sessionStorage.getItem('carryon_user');
    if (savedUser) setCurrentUser(JSON.parse(savedUser));
  }, []);

  const login = (email: string, role: UserRole) => {
    const user = users.find(u => u.email === email && u.role === role) || {
      id: Math.random().toString(36).substr(2, 9),
      name: email.split('@')[0],
      email, 
      role, 
      joinedAt: 'Today', 
      status: 'approved', 
      reputation: role === 'worker' ? 50 : undefined
    };
    setCurrentUser(user);
    sessionStorage.setItem('carryon_user', JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('carryon_user');
  };

  const updateTaskStatus = (taskId: string, status: TaskStatus, additionalData?: Partial<Task>) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const newEvent: TimelineEvent = {
          id: Math.random().toString(),
          status,
          label: status.replace('-', ' ').toUpperCase(),
          timestamp: new Date().toLocaleString(),
          description: `Protocol status transitioned to ${status}.`
        };
        return { ...t, status, ...additionalData, timeline: [...t.timeline, newEvent] };
      }
      return t;
    }));
  };

  const createTask = (task: Omit<Task, 'id' | 'createdAt' | 'timeline' | 'artifacts'>) => {
    const newTask: Task = {
      ...task,
      id: `T-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString().split('T')[0],
      timeline: [{ id: 'init', status: 'draft', label: 'Node Initialized', timestamp: new Date().toLocaleString(), description: 'Task draft created.' }],
      artifacts: []
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const addArtifact = (taskId: string, artifact: Omit<Artifact, 'id' | 'timestamp'>) => {
    setTasks(prev => prev.map(t => t.id === taskId ? {
      ...t,
      artifacts: [...t.artifacts, { ...artifact, id: Math.random().toString(), timestamp: new Date().toLocaleString() }]
    } : t));
  };

  const assignWorker = (taskId: string, workerId: string) => {
    updateTaskStatus(taskId, 'assigned', { workerId });
  };

  const updateUserStatus = (userId: string, status: 'approved' | 'rejected') => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, status } : u));
  };

  return (
    <AppContext.Provider value={{ currentUser, tasks, users, login, logout, updateTaskStatus, createTask, addArtifact, assignWorker, updateUserStatus }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
