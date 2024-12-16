document.addEventListener('DOMContentLoaded', function() {
  fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(response => response.json())
      .then(data => {
          const serviceList = document.getElementById('service-list');
          data.forEach(service => {
              const div = document.createElement('div');
              div.className = 'service-item';
              div.innerHTML = <><h3>${service.name}</h3><p>${service.description}</p></>;
              serviceList.appendChild(div);
          });
      })
      .catch(error => console.error('Ошибка при получении данных:', error));

  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const formData = { name, email, message };
      fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-message').innerText = 'Сообщение отправлено!';
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('response-message').innerText = 'Произошла ошибка при отправке сообщения.';
    });
});
});
