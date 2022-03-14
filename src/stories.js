const storiesINFO = [
    {imagem: "assets/img/9gag.svg", usuario: "9ga"},
    {imagem: "assets/img/meowed.svg", usuario: "meowed"},
    {imagem: "assets/img/barked.svg", usuario: "barked"},
    {imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {imagem: "assets/img/respondeai.svg", usuario: "respondeai"},
    {imagem: "assets/img/filomoderna.svg", usuario: "filomoderna"},
    {imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
]

function Story(props){
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}

function Icone(props){
    return(
        <ion-icon name={props.nomeIcone}></ion-icon>
    )
}

function Setinha(){
    return (
        <div class="setinha">
              <Icone nomeIcone="chevron-forward-circle"/>
        </div>
    );
}

export default function Stories(){
    return (
        <div class="stories">
            {storiesINFO.map( story => <Story img={storiesINFO.imagem} usuario={storiesINFO.usuario}/>)}
            <Setinha/>
        </div>
    );
}
