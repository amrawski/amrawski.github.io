type LayoutProps = {
    children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-stone-50 text-slate-900">
            <main className="max-w-3xl mx-auto px-6 py-16">
                {children}
            </main>
        </div>
    );
}
