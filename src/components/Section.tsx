type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export function Section({ title, children }: SectionProps) {
    return (
        <section className="mb-20">
            <h2 className="text-xl font-semibold tracking-tight mb-6 border-b border-slate-200 pb-2">
                {title}
            </h2>
            {children}
        </section>
    );
}
