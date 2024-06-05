import React from 'react';
import Link, { LinkProps } from 'next/link';

interface ScrollLinkProps extends LinkProps {
  offset?: number;
  children: React.ReactNode;
  className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ offset = -80, children, className, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = (props.href as string).replace('#', '');
    if (targetId ===''){window.scrollTo({top: 0, behavior: 'smooth'})};
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const y = targetElement.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

   return (
    <Link {...props} scroll={false} passHref>
      <span onClick={handleClick} className={className} role="link">
        {children}
      </span>
    </Link>
  );
};

export default ScrollLink;