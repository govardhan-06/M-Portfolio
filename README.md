# M-Portfolio

M-Portfolio is a sleek and modern portfolio website built with **Next.js 15**, a combination of **Material-UI** and **Tailwind CSS**, and powered by **Supabase** for backend services. The site showcases your projects, skills, and professional journey in an elegant and responsive design.

The portfolio is live at: [govardhan.tech](https://govardhan.tech/)

---

## Features

- **Responsive Design**: Seamlessly adapts to different screen sizes and devices.
- **Tech Stack**:
  - **Frontend**: Next.js 15 with Material-UI and Tailwind CSS.
  - **Backend**: Supabase for database
- **Dynamic Content**: Projects and skills are dynamically fetched from Supabase.
- **SEO Optimized**: Built with Next.js's built-in SEO capabilities to improve discoverability.

---

## Installation

To run the project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/m-portfolio.git
   cd m-portfolio
   npm install
   ```
2. **Set Up Environment Variables Create a .env.local file in the root directory and add the following**
   ```bash
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. **Start the dev server**
   ```bash
   npm run dev
   ```
