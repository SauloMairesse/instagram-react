import Sugestoes from "./sugestoes"

export default function SideBar(){
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestoes />
            <Links />
            <CopyRight />
        </div>
    );
}

function Usuario(){
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
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