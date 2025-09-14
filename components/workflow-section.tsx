export function WorkflowSection() {
  const stages = [
    {
      title: "ACQUAINTANCE",
      description: "We discuss the details of your shoot and get to know each other.",
    },
    {
      title: "BOOKING",
      description: "We select the date and time of your photoshoot session.",
    },
    {
      title: "SHOOTING",
      description: "We are filming the planned photoshoot in a relaxed atmosphere.",
    },
    {
      title: "FINISHED PHOTOS",
      description: "You receive your edited photos, carefully retouched within 7 days.",
    },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">STAGES OF WORK</h2>

          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div key={index} className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src="/professional-photographer-working-behind-the-scene.jpg"
            alt="Photography Process"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
