const fs = require('fs');
const path = require('path');

// Функция составления страницы из шаблона
function render(templateName, data) {
  fs.readFile(path.resolve('views', templateName), 'utf-8', (error, template) => {
    if (error) {
      this.writeHead(500, { 'Content-Type': 'text/plain' });
      return this.end(error.message);
    };

    let html = template

    if (data) {
      html = template.replace(/{{([^{}]*)}}/g, (placeholder, property) => {
        // placeholder - {{Title}}
        // property - Title

        const match = data[property];

        return match || placeholder;
      });
    }

    this.writeHead(200, { 'Content-Type': 'text/html' });
    this.end(html);
  });
}

module.exports = render;