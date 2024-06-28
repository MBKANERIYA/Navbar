import { Link } from "react-router-dom"
import { NavbarData } from "./NvbarData"

function Navbar() {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                NavbarData.map((val, index) => {
                                    return (
                                        <>
                                            <li class="nav-item">
                                                <Link to={`${val.path}`} class="nav-link active" aria-current="page">{val.name}</Link>
                                            </li>
                                        </>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar