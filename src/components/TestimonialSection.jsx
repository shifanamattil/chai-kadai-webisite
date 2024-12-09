import React from "react";

function TestimonialSection() {
  const testimonials = [
    { id: 1, name: "Sarah", review: "Amazing food and great service!" },
    { id: 2, name: "John", review: "The best meals in town." },
  ];

  return (
    <section id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p>{testimonial.review}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
