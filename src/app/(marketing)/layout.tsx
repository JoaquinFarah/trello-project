import { NavbarComponent } from "@/components/Navbar";

export default function MarketingLayout({
    children
} : {
    children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-slate-100 text-black">
        <NavbarComponent />
        <main className="pt-20 pb-20 bg-slate-100">
        {children}
        </main>
    </div>
  );
}