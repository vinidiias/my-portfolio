import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logoBlack from '../../assets/logo_black.png'
import logoWhite from '../../assets/logo_white.png'
import { useTheme } from "@/hooks/useTheme";

const social_medias_list = [
  <FaXTwitter size={20} />,
  <FaFacebook size={20} />,
  <FaLinkedin size={20} />,
  <FaInstagram size={20} />,
];

export const Footer: React.FC = () => {
    const { theme } = useTheme()

    return (
        <footer className="flex items-center justify-between w-full px-10">
            <img src={theme === 'dark' ? logoWhite : logoBlack} alt="" className="min-w-25 w-25" />
            <div className="flex items-center gap-3">
                {social_medias_list.map((item, index) => (
                    <a key={index} href="">{item}</a>
                ))}
            </div>
            <p>© 2025 Vinícius Dias</p>
        </footer>
    )
}