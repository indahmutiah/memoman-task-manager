import { Memo } from "@/types/memo";

export const data: Memo[] = [
  {
    id: 1,
    title: "Fixing Bugs for the Project",
    description: "<p><b>My Memo to Fix Bugs</b></p>",
    isCompleted: true,
    date: new Date(),
  },
  {
    id: 2,
    title: "Report Daily Progress",
    description:
      "<p><b>Today Report Documentation.</b> <i>Today Report Documentation.</i></p>",
    isCompleted: true,
    date: new Date(),
  },
  {
    id: 3,
    title: "Checking for New Features",
    description: "<p><b>New features to add to the project.</b></p>",
    isCompleted: false,
    date: new Date(),
  },
];
