import Link from "next/link"

export default function header() {
    return (
        <header className='main-header'>
            <nav className="nav main-nav">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/About-Us'>About Us</Link></li>
                    <li><Link href='/Development-Programs'>Development Programs</Link></li>
                    <li><Link href='/PBU-Juniors'>PBU Juniors</Link></li>
                    <li><Link href='/Private-Lessons'>Private Lessions</Link></li>
                    <li>More</li>
                </ul>
            </nav>
        </header>
    )
}