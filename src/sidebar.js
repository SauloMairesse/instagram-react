import Sugestoes from "./sugestoes"

export default function SideBar(){
    return (
        <div class="sidebar">
            <Usuario imgUsuario={"assets/img/catanacomics.svg"} tagUsuario={"catanacomics"} nickUsuario={"catana"}/>
            <Sugestoes />
            <Links />
            <CopyRight />
        </div>
    );
}

function Usuario(props){
    return (
        <div class="usuario">
            <img src={props.imgUsuario} />
            <div class="texto">
              <strong>{props.tagUsuario}</strong>
              {props.nickUsuario}
            </div>
        </div>
    );
}

function Links(){
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}

function CopyRight(){
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}