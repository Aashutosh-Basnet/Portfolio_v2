import { IconType } from "react-icons";

interface SocialButtonProps {
    label: string;
    Icon: IconType;
    className?: string;
    link: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ label, Icon, className = "", link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`m-2 w-[160px] flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${className}`}
        >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
        </a>
    );
};

export default SocialButton;
