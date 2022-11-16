import React, { useState } from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { restoreState, saveState } from './localStorage/localStorage';
import s from './common/c4-SuperEditableSpan/SuperEditableSpan.module.css';

function HW6() {
  const [value, setValue] = useState<string>('');

  const save = () => {
    saveState<string>('editable-span-value', value);
  };
  const restore = () => {
    setValue(restoreState<string>('editable-span-value', value));
  };

  return (
    <div>

      homeworks 6
      <div className={s.six}>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{ children: value ? undefined : 'enter text...' }}
        />
      </div>
      <div className={s.button}>
        <SuperButton onClick={save}>save</SuperButton>
        <SuperButton onClick={restore}>restore</SuperButton>
      </div>
    </div>
  );
}

export default HW6;
