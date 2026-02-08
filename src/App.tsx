import { Layout } from './components/Layout.tsx';
import { About } from './components/About';
import { Section } from './components/Section.tsx';

function App() {
    return (
        <Layout>
            <About />

            <Section title="About">
                <p className="text-slate-700">
                    Husband, Father, Professional Problem Solver,
                    and Software Engineer. I have a passion for
                    building reliable software and exploring the outdoors with my family.
                </p>
            </Section>
        </Layout>
    );
}

export default App;
