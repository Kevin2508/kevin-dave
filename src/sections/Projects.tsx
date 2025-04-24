import Card from '../components/Card';

export default function Projects() {
  const projects = [
    { title: 'MindHaven', description: 'Mental health app.', tech: ['Flutter', 'Python'] },
    { title: 'CityEye', description: 'Civic monitoring system.', tech: ['React', 'Django'] },
  ];

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}