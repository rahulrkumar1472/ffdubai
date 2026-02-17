type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({items}: {items: FaqItem[]}) {
  if (!items.length) return null;

  return (
    <section className="section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
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
