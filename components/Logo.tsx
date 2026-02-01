import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "h-10",
  light = false,
  url = "/logo-mini.png",
}) => {
  const primaryColor = light ? "#FFFFFF" : "#0F2A44";
  const secondaryColor = "#1FB6AA";
  const accentColor = "#94a3b8";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={url} alt="TSMED Logo" className="h-full w-auto" />
    </div>
  );
};

export default Logo;
