type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({items, title = "Frequently Asked Questions"}: {items: FaqItem[]; title?: string}) {
  if (!items.length) return null;

  return (
    <section className="section" id="faq">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="inner-card-grid">
          {items.map((item) => (
            <article className="card faq-item-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
