import Input from '@components/Input'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const BankInfoForm = () => {
    const { register } = useFormContext()
  return (
      <>
          <h3>BankInfoForm</h3>
          <Input name="bankInfo.bankName" register={register} placeholder="Bank name" type="text" />
          <Input name="bankInfo.branchNumber" register={register} placeholder="Branch number" type="number" />
          <Input name="bankInfo.accountNumber" register={register} placeholder="Bank account number" type="number" />
          <select {...register("bankInfo.accountType")}>
              <option key="Checking" value="Checking">Checking</option>
              <option key="Saving" value="Saving">Saving</option>
          </select>
          <Input name="bankInfo.accountName" register={register} placeholder="Holder name" type="text" />
          <Input name="bankInfo.transitNumber" register={register} placeholder="Transit number" type="number" />
      </>
  )
}

export default BankInfoForm 