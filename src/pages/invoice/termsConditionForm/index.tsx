import { Box, TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const TermsAndConditionForm = () => {
  const { register } = useFormContext();
  return (
    <Box sx={{ width: '90%' }}>
      <h3>Term and Condition</h3>
      <TextField
        {...register('condition')}
        label="NOTE/TERM & CONDITIONS"
        multiline
        maxRows={4}
        fullWidth
      />
    </Box>
  );
};

export default TermsAndConditionForm;
