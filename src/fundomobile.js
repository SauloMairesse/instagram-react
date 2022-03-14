export default function FundoMobile(){
    return(
        <div class="fundo-mobile">
            <Icone nomeIcone="home"/>
            <Icone nomeIcone="search-outline"/>
            <Icone nomeIcone="add-circle-outline"/>
            <Icone nomeIcone="heart-outline"/>
            <Icone nomeIcone="person-outline"/>
        </div>
    );
}

function Icone(props){
    return(
        <ion-icon name={props.nomeIcone}></ion-icon>
    )
}