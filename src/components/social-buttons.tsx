import Link from "next/link";
import {
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

interface SocialButtonsProps {
  className?: string;
}

export default function SocialButtons({ className = "" }: SocialButtonsProps) {
  const socialLinks = [   
    {
      icon: <FaFacebookF className="w-5 h-5" />,
      href: "https://www.facebook.com/MrAndrewMurdoch",
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <FaXTwitter className="w-5 h-5" />,
      href: "https://x.com/MrAndrewMurdoch",
      label: "X",
      color: "bg-sky-500 hover:bg-sky-600",
    },   
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/mrandrewmurdoch/",
      label: "LinkedIn",
      color: "bg-blue-700 hover:bg-blue-800",
    },
  ];

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`${link.color} text-white p-2 rounded-full transition-transform hover:scale-110 flex items-center justify-center`}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
