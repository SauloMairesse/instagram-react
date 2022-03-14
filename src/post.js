export default function Posts(){
    return (
        <div class="Posts">
            {postsINFO.map(postINFO => <Post imgUsuario={postINFO.imgUsuario} usuario={postINFO.usuario} imgPost={postINFO.imgPost} imgQuemCurtiu={postINFO.imgQuemCurtiu} quemCurtiu={postINFO.quemCurtiu} numCurtidas={postINFO.numCurtidas}/>)}
        </div>
    );
}

const postsINFO = [
    {imgUsuario: "assets/img/meowed.svg", usuario: "meowed", imgPost: "assets/img/gato-telefone.svg", imgQuemCurtiu: "assets/img/respondeai.svg", quemCurtiu: "respondeai", numCurtidas: "101.523"},
    {imgUsuario: "assets/img/barked.svg", usuario: "barked", imgPost: "assets/img/dog.svg", imgQuemCurtiu: "assets/img/adorable_animals.svg", quemCurtiu: "adorable_animals", numCurtidas: "99.159"}

]

function Post(props){
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={props.imgPost} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgQuemCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{props.quemCurtiu}</strong> e <strong>outras {props.numCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}