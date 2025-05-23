const screen = {
    userProfile:document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt=Foto do perfil do usuario"/>
                            <div class="data">
                            <h1>${user.name ?? 'Não possui nome cadastrado '}</h1>
                            <p>${user.bio ?? 'Não possui bio Cadastrada'} </p>
                            </div>
                        </div>`
        let repositoriesItens = ""
        user.repositories.forEach(repo => 
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class= "repositories section">
            <h2>Repositorios</h2>
            <ul>${repositoriesItens}</ul>
        </div>`
        }
        let followersItens = ""
        user.followers.forEach(follower => 
            followersItens += `<li><a href="${follower.html_url}" target="_blank">${follower.login}</a></li>`)
        if(user.followers.length > 0){
            this.userProfile.innerHTML += `<div class= "followers section">
            <h2>Seguidores</h2>
            <ul>${followersItens}</ul>
        </div>`
        }
},
renderNotFound(){
    this.userProfile.innerHTML = "<h3>Usuário não encontrado! </h3>"
    
}
}

export { screen }