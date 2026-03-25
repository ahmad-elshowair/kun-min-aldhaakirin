# Kun Min Aldhaakirin (كن من الذاكرين)

**Kun Min Aldhaakirin** is a modern, responsive web application designed to help Muslims maintain their daily Adhkar (remembrances). It provides a structured interface for accessing essential supplications for different times of the day, including morning, evening, after prayer, and before sleeping.

## ✨ Features

- **Daily Adhkar Categories**:
  - 🌅 **Morning (Sabah)**: Essential remembrances to start your day.
  - 🌇 **Evening (Masaa)**: Supplications for the end of the day.
  - 🕌 **After Prayer (Salah)**: Adhkar traditionally recited after the five daily prayers.
  - 🛌 **Before Sleeping (Nawm)**: Recommended supplications before rest.
- **Interactive Dhikr Counter**: Track your progress for each remembrance with a built-in interactive counter.
- **Multi-language Support**: Seamlessly toggle between Arabic and English translations.
- **Modern & Responsive UI**: A clean, premium design that works beautifully on mobile, tablet, and desktop.
- **Dark/Light Mode**: Full support for system themes and manual selection for comfortable reading in any environment.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
- **Backend/Assets**: [Supabase](https://supabase.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmad-elshowair/kun-min-aldhaakirin.git
   cd kun-min-aldhaakirin
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is open-source. Please check the LICENSE file (if available) for more details.

---

*Join the ranks of those who remember Allah throughout their day.*
