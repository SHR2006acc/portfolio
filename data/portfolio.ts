import { BrainCircuit, Code2, Cpu, Github, Globe2, Layers3, LineChart, MonitorSmartphone } from 'lucide-react'

export const nav = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact']
export const projects = [
  { name: 'MedGuardian', type: 'Smart IoT Pill Dispenser', description: 'A medication management system bringing together a smart dispenser, scheduling, an OLED interface, remote monitoring, refill management, and intelligent notifications.', tags: ['ESP32', 'Arduino', 'C++', 'IoT'], icon: Cpu, tone: 'cyan', github: null, demo: null },
  { name: 'SIR', type: 'Smart Intercity Transportation Platform', description: 'A unified platform for exploring and booking intercity travel in Morocco across buses, trains, flights, and shared taxis.', tags: ['Next.js', 'TypeScript', 'Tailwind', 'APIs'], icon: MonitorSmartphone, tone: 'violet', github: null, demo: null, award: 'First place · UH2C Summer School 2026' },
  { name: 'HT Bank System', type: 'Banking Management System', description: 'A C-based banking system covering authentication, account management, deposits, withdrawals, transfers, loans, debit management, and secure file storage.', tags: ['C', 'File handling', 'Data structures'], icon: Layers3, tone: 'orange', github: null, demo: null },
  { name: 'Inventory Optimization', type: 'Numerical Analysis', description: 'An inventory management study applying EOQ, demand forecasting, interpolation, differentiation, and integration to reduce operational cost.', tags: ['Python', 'EOQ', 'Forecasting'], icon: LineChart, tone: 'green', github: null, demo: null },
]
export const skills = [
  { title: 'Programming', icon: Code2, items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Frontend', icon: MonitorSmartphone, items: ['React', 'Next.js', 'Tailwind CSS', 'UI/UX'] },
  { title: 'Embedded', icon: Cpu, items: ['ESP32', 'Arduino', 'IoT'] },
  { title: 'AI & Tools', icon: BrainCircuit, items: ['AI Fundamentals', 'Prompt Engineering', 'Git', 'Linux', 'Figma'] },
]
export const timeline = [
  ['Helpers of Hope', 'Active Member', 'Social initiatives, teamwork, and community engagement.'],
  ['French Call Center', 'Customer Service Representative', 'Customer communication, adaptability, and professional problem solving.'],
  ['Summer University Program', 'Artificial Intelligence & Citizenship', 'Workshops focused on AI, ethics, innovation, and digital transformation.'],
  ['UH2C International Summer School 2026', 'Digital Transformation of Society & Ethics', 'Collaborative work in multidisciplinary international teams on technology solutions.'],
  ['America250 STEAM Innovation Program', 'Problem Solving & Robotics', 'Engineering challenges involving robotics, innovation, and collaborative problem solving.'],
]
export const achievements = [['01', 'First Place', 'UH2C International Summer School 2026', 'SIR'], ['02', 'Second Place', 'America Innovation Hackathon', 'MedGuardian'], ['03', 'Third Place', 'Social Forum · EHTP 11th Edition', '']]
