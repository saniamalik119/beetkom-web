import React from 'react'
import { TermData } from '../data'
const TermsCondition = () => {
  return (
    <div className='px-20 '>
    <p className='text-5xl capitalize '>Terms and Conditions—Beetkom
</p>
<p className='mt-10'>
Kindly Browse the Terms of Use in detail for the (the Real Estate App) The Service supervised by Beetkom (“us,” “we,” or “our”)
When you can access Beetkom, the actions mean you are complying with the Terms and use. The user accepts the terms. They are applicable to all users, visitors, and other individuals who are using Beetkom. If you are not happy with the Terms of Use, do not use Beetkom.

</p>
{TermData.map((term, i)=>(
  <div
  className='pb-6'
   key={i}>
  <h2 className='text-2xl pt-4'>{term.heading}</h2>
<p className='pb-6'>
{term.content}

</p>

  </div>
))}
  </div>
  )
}

export default TermsCondition