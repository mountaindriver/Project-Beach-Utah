import Link from "next/link"

export default function header() {
    return (
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/About-Us'>About Us</Link></li>
            <li><Link href='/Development-Teams'>Development Teams</Link></li>
            <li><Link href='/PBU-Juniors'>PBU Juniors</Link></li>
            <li><Link href='/Private-Lessons'>Private Lessions</Link></li>
            <li>More</li>
        </ul>
    )
}