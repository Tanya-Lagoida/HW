import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  HTMLAttributes,
  useState
} from 'react';
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText';
import s from './SuperEditableSpan.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
  spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({ autoFocus, onBlur, onEnter, spanProps, ...restProps }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {};

  const onEnterCallback = () => {
    onEnter && onEnter();
    setEditMode(false);
  };
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e);
    setEditMode(false);
  };
  const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    onDoubleClick && onDoubleClick(e);
    setEditMode(true);
  };

  // const spanClassName = `${'сделать красивый стиль для спана'} ${className}`;

  return (
    <>
      {editMode
        ? (
          <SuperInputText
            autoFocus
            onBlur={onBlurCallback}
            onEnter={onEnterCallback}
            className={s.inputClass}
            {...restProps} />
        ) : (
            <span
            onDoubleClick={onDoubleClickCallBack}
            className={s.spanClassName}
            {...restSpanProps} >
               {children || restProps.value}
          </span>
        )
      }
    </>
  );
};

export default SuperEditableSpan;
