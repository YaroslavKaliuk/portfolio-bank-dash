'use client';

import cn from 'classnames';
import { FC, useState, ChangeEvent } from 'react';
import styles from './styles.module.scss';
import * as Icons from '@/icons';
import { useTranslations } from 'next-intl';

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  title?: string;
  error?: string;
  defaultValue?: string;
  translationKey?: string;
}

export const Input: FC<InputProps> = ({
  title,
  error,
  defaultValue,
  value,
  onChange,
  type,
  translationKey,
  ...props
}) => {
  const t = useTranslations();
  const [inputValue, setInputValue] = useState(defaultValue || '');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const inputType = type === 'password' && showPassword ? 'text' : type;
  const inputTitle = translationKey ? t(translationKey) : title;

  return (
    <label className={cn(styles.input, error && styles.input__error)}>
      <input
        value={value !== undefined ? value : inputValue}
        onChange={handleChange}
        type={inputType}
        {...props}
      />
      {type === 'password' && (
        <button type="button" className={styles.input__showPassword} onClick={togglePassword}>
          {showPassword ? <Icons.IconEyeSlash /> : <Icons.IconEye />}
        </button>
      )}
      {inputTitle && <span className={styles.input__title}>{inputTitle}</span>}
      {error && <span className={styles.input__message}>{error}</span>}
    </label>
  );
};
