import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"; // JS for components like modals/dropdowns

document.getElementById("app").innerHTML = `
  <div class="container mt-4">
    <h1>Hello, Bootstrap</h1>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#m">Open modal</button>
    <div class="modal fade" id="m"><div class="modal-dialog"><div class="modal-content p-3">A Bootstrap modal</div></div></div>
  </div>`;
