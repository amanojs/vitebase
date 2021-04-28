const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const img = document.createElement('img');
img.setAttribute('src', '/images/profile.jpg');
app.appendChild(img);
