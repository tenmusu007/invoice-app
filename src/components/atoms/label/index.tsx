import React from 'react';

import type { inputLabel as inputLabelType } from 'types/inputLabel';

const InputLabel = ({ htmlFor, labelName }: inputLabelType) => <label htmlFor={htmlFor}>{labelName}</label>;

export default InputLabel;
