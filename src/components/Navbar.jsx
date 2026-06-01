function Navbar(){
    return (
        <div style={{
             backgroundColor: "black",
            color :"white" ,
            padding : "15px",
            display : "flex",
            justifyContent : "space-between"
        }}>
            <h2>My React Website</h2>
            <ul style={{
                display : "flex",
                gap : "20px",
                listStyle : "none"
            }}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Navbar