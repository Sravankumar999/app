interface ModelProps {
    name: string,
    age: number
}

function Model({ name, age }: ModelProps) {
    return <div className="border-2 border-solid rounded">
        <p>The name is {name}</p>
        <p>The age is {age}</p>
    </div>
}

export default Model;