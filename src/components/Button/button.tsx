import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>; // button标签属性类型定义
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>; // a标签属性类型定义

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>; // Partial ts全局泛型 设置T类型全部为可选

const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, href, ...reset } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a {...reset} className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...reset} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
