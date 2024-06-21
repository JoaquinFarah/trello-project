
export default function MarketingLayout({
    children
} : {
    children: React.ReactNode;
}) {
  return (
    <div style={{backgroundImage: "url('/hero.png')"}} className="bg-cover h-screen flex items-center">

        {children}

    </div>
  );
}