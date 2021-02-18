import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({
  router,
  children,
  href,
  activeClassName,
  ...otherProps
}) => {
  const child = Children.only(children);
  const className = cx(child.props.className, {
    [activeClassName]: router.pathname === href && activeClassName
  });

  return (
    <Link href={href} {...otherProps}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};