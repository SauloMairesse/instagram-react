function Icone(props){
    return(
        <ion-icon name={props.nomeIcone}></ion-icon>
    )
}

function LogoMobile(){
    return (
            <div class="logo">
                <Icone nomeIcone="logo-instagram"/>
                <div class="separador"></div>
                <img src="assets/img/logo.png" />
            </div>);
}

function LogoDesktop(){
    return(        
        <div class="logo-mobile">
            <Icone nomeIcone="logo-instagram"/>
        </div>);
}

function InstagramMobile(){
    return(
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>);
}

function BarraDePesquisa(){
    return(
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>);
}

function Icones(){
    return(
        <div class="icones">
            <Icone nomeIcone="paper-plane-outline"/>
            <Icone nomeIcone="compass-outline"/>
            <Icone nomeIcone="heart-outline"/>
            <Icone nomeIcone="person-outline"/>
        </div>);
}

function IconesMobile(){
    return(
        <div class="icones-mobile">
            <Icone nomeIcone="paper-plane-outline"/>
        </div>);
}

function Container(){
    return(
        <div class="container">
            <LogoDesktop/>
            <LogoMobile/>
            <InstagramMobile/>
            <BarraDePesquisa/>
            <Icones/>
            <IconesMobile/>
        </div>
    );
}

export default function NavBar(){
    return(
        <section class="navbar">
            <Container/>    
        </section>);
}