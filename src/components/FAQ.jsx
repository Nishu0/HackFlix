import React, { useEffect } from "react";
import "./style.css"; // Import your external CSS file

const FAQComponent = () => {
  useEffect(() => {
    const faqs = document.querySelectorAll('[data-list="faq"]');
    if (faqs.length !== 0) {
      faqs.forEach(function (faq) {
        const items = faq.querySelectorAll(":scope > li");

        items.forEach(function (item) {
          const input = item.querySelector(":scope > input");
          if (input) {
            input.addEventListener("change", function () {
              const label = item.querySelector(":scope > label");
              const answer = item.querySelector(":scope > label + div");

              label.classList.toggle("expanded");

              if (input.checked) {
                answer.style.maxHeight = answer.scrollHeight + "px";
              } else {
                answer.style.maxHeight = null;
              }
            });
          }
        });
      });
    }
  }, []);

  return (
    <div className="py-10 px-4 container mx-auto">
      <ul className="grid gap-6" data-list="faq">
        <li className="group">
          <input style={{ display: "none" }} type="checkbox" id="checkbox-1" name="checkbox-options" />
          <label className="label" htmlFor="checkbox-1">
            What is HackFlix?
          </label>
          <div className="answer">
            <div className="answer-content">
              React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components
              and efficiently update and render components when data changes.
            </div>
          </div>
        </li>
        <li className="group">
          <input style={{ display: "none" }} type="checkbox" id="checkbox-3" name="checkbox-options" />
          <label className="label" htmlFor="checkbox-3">
          Can beginners participate??
          </label>
          <div className="answer">
            <div className="answer-content">
              Staright Forward No. We don't sugar coat
            </div>
          </div>
        </li>
        <li className="group">
          <input style={{ display: "none" }} type="checkbox" id="checkbox-4" name="checkbox-options" />
          <label className="label" htmlFor="checkbox-4">
            Is there any prize money?
          </label>
          <div className="answer">
            <div className="answer-content">
              Is there is so much prize money that you never imagined of in your dreams managed by one and only shreyan bhaiya(He can even donate you if you ask him nicely )
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FAQComponent;
