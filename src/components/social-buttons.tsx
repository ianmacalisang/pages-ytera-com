import Link from "next/link";
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

interface SocialButtonsProps {
  className?: string;
}

export default function SocialButtons({ className = "" }: SocialButtonsProps) {
  const socialLinks = [
    {
      icon: <FaYoutube className="w-5 h-5" />,
      href: "https://youtube.com",
      label: "YouTube",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: <FaFacebookF className="w-5 h-5" />,
      href: "https://facebook.com",
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter",
      color: "bg-sky-500 hover:bg-sky-600",
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      href: "https://instagram.com",
      label: "Instagram",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://linkedin.com",
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
