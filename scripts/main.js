document.addEventListener('DOMContentLoaded', function() {
    const endpoint = 'https://api.github.com/users/andersonvsantos';

    fetch(endpoint).then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        document.getElementById('imagem').src = json.avatar_url;
        document.getElementById('nome').innerHTML = json.name;
        document.getElementById('username').innerHTML = json.login;
        document.getElementById('repositorios').innerHTML = json.public_repos;
        document.getElementById('seguidores').innerHTML = json.followers;
        document.getElementById('seguindo').innerHTML = json.following;
        document.getElementById('link').href = json.html_url;
    })
    .catch(function(erro) {
        alert('Ocorreu um erro ao buscar o perfil.');
    })
});