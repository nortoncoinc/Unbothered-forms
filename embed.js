// Embed Script: embed.js
(function() {
  const script = document.currentScript;
  const formId = script.getAttribute("data-form-id");
  const container = document.createElement("div");
  fetch(`https://unbothered-forms.netlify.app/forms/${formId}.html`)
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;
      script.parentNode.insertBefore(container, script);
    });
})();
