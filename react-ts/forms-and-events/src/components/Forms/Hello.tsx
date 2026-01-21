interface HelloProp {
    name: string
}
const Hello: React.FC<HelloProp> = ({ name }) => {
    return (
        <div>Hello, {name}</div>
    )
}

export default Hello;