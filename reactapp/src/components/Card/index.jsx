import './styles.css';

/* Obtem as propriedades através do parâmetro `props` */
export function Card(props) {
    return(
        <div className="card">
            <strong>{props.name}</strong> {/* Pega o nome contido na propriedade `name` */}
            <small>{props.time}</small> {/* Pega o tempo contido na propriedade `time` */}
        </div>
    )
}

/* Outra forma só que desestruturando o `props` já passando a propridade desejada
export function Card({ name, time }) {
    return(
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}
*/