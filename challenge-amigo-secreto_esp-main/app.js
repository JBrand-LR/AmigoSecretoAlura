const amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (!nombre) {
    alert('Escribe un nombre válido');
    return;
  }
  if (amigos.includes(nombre)) {
    alert('Ese nombre ya está en la lista');
    return;
  }

  amigos.push(nombre);
  input.value = '';
  renderLista();
}

function renderLista() {
  const ul = document.getElementById('lista-amigos');
  ul.innerHTML = amigos.map(n => `<li>${n}</li>`).join('');
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Agrega al menos 2 amigos');
    return;
  }
  const i = Math.floor(Math.random() * amigos.length);
  document.getElementById('resultado').textContent =
    `🎉 Siuuuuu, Tu amigo secreto es: ${amigos[i]}`;
}


document.getElementById('btn-add').addEventListener('click', agregarAmigo);
document.getElementById('btn-sortear').addEventListener('click', sortearAmigo);
document.getElementById('amigo').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarAmigo();
});

