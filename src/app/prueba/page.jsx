export default function Pueba(){
    return(
    <div className="container mx-auto px-3 py-7">
        <ul className="list-disc list-inside">
            <li>Primer item</li>
            <li>Segundo item</li>
            <li>tercer item
            <ul className="list-disc list-inside pl-16">
                <li>cuarto item</li>
            </ul>
            </li>
        </ul>
    </div>
    )
}
