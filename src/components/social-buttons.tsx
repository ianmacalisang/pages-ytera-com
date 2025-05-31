"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

interface SocialButtonsProps {
  className?: string;
}

export default function SocialButtons({ className = "" }: SocialButtonsProps) {
  const socialLinks = [
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      href: "https://x.com/MrAndrewMurdoch",
      label: "X",
    },
    {
      icon: <FaFacebookF className="w-6 h-6" />,
      href: "https://www.facebook.com/MrAndrewMurdoch",
      label: "Facebook",
    },
    {
      icon: <FaLinkedinIn className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/mrandrewmurdoch/",
      label: "LinkedIn",
    },
    {
      icon: <FaLink className="w-6 h-6" />,
      href: "https://www.andrewmurdoch.com/",
      label: "Copy Link",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href);
      },
    },
  ];

  return (
    <div className={`flex gap-2 ${className}`}>
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={link.onClick}
          className="border-2 border-white text-white w-12 h-12 flex items-center justify-center transition-transform hover:scale-105 hover:opacity-80 rounded-lg"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
