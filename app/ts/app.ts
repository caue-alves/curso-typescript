const Controller = new negociacao_controller();

document
    .querySelector('.form')
    .addEventListener('submit', Controller.adiciona.bind(Controller));