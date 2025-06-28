import { Code, Github, Palette, Rocket, ShoppingBag, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] items-center text-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-base-content mb-4 font-display">
              🛍️ Cloudflex Store
            </h1>
            <p className="text-lg text-base-content/70 mb-8 font-body">
              Frontend Developer Technical Test
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="btn btn-primary btn-lg font-body"
              href="/products"
            >
              <ShoppingBag className="w-5 h-5" />
              View Products
            </Link>
            
            <a
              className="btn btn-outline btn-lg font-body"
              href="https://github.com/acelest/aubin-cloudflex/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </a>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold text-base-content mb-4 font-display">
              🚀 Technologies Used
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="badge badge-primary badge-lg gap-2 font-body">
                <Rocket className="w-4 h-4" />
                Next.js 15
              </div>
              <div className="badge badge-secondary badge-lg gap-2 font-body">
                <Zap className="w-4 h-4" />
                React 19
              </div>
              <div className="badge badge-accent badge-lg gap-2 font-body">
                <Palette className="w-4 h-4" />
                Tailwind CSS
              </div>
              <div className="badge badge-neutral badge-lg gap-2 font-body">
                <Code className="w-4 h-4" />
                TypeScript
              </div>
            </div>
          </div>
        </main>
        
        <footer className="flex gap-[24px] flex-wrap items-center justify-center">
          <p className="text-sm text-base-content/60 font-body">
            © 2024 Cloudflex Technical Test - Built with ❤️
          </p>
        </footer>
      </div>
    </div>
  );
}
