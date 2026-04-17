# Keen Keeper

A modern Next.js application for tracking and visualizing social interactions with friends.

## 🚀 Technologies Used

- **Next.js 16.2.3** - React framework for production
- **React 19.2.4** - UI library
- **Recharts** - Chart library for data visualization
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Toastify** - Notification library
- **ESLint** - Code linting

## ✨ Key Features

### 1. Friend Tracking Dashboard
Interactive friend cards with detailed tracking information and statistics visualization using pie charts.

### 2. Timeline View
Comprehensive timeline of all social interactions, calls, videos, and messages with friends.

### 3. Statistics Analytics
Detailed stats page with pie chart components showing interaction breakdowns and engagement metrics.

## 🛠️ Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── globals.css     # Global styles
│   ├── layout.js       # Root layout
│   ├── page.jsx        # Home page
│   ├── stats/          # Statistics page
│   ├── timeline/       # Timeline page
│   └── [FriendId]/     # Dynamic friend pages
├── components/         # Reusable React components
│   ├── Friends/        # Friend-related components
│   ├── Timeline/       # Timeline components
│   ├── PieChartComponents/  # Chart components
│   └── ...
├── context/            # React context providers
├── data/               # Static data files
└── assets/             # Static assets
```

## 📊 Features Overview

- **Dynamic Routing**: Friend-specific pages using Next.js dynamic routes
- **Context Management**: Timeline context for state management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Data Visualization**: Interactive charts with Recharts
- **Toast Notifications**: User feedback with React Toastify</content>
<parameter name="filePath">/home/shafayat/WBC-2026/M7-react-router-&Next.JS/Assignment/a7-keen-keeper/README.md</parameter>