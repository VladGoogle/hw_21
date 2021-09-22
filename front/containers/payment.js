import { useState } from 'react';
import SplitForm from '../components/stripe/split-card.js';
import PaymentRequestForm from '../components/stripe/google-btn';

const examples = {card: 'Split Card Example', google: 'Example With Google Pay'};


export default function PaymentContainer() {
  const [example, setExample] = useState(examples.card);

  return <div>
    <div className={'select'}>
      <label>{example}</label>
      <select value={example} onChange={(ev) => setExample(ev.target.value) } >
        <option value={examples.card}>{examples.card}</option>
        <option value={examples.google}>{examples.google}</option>
      </select>
    </div>
    {
      example === examples.card && (
        <>
          <SplitForm />
        </>
      )
    }
    {
      example === examples.google && (
        <>
          <PaymentRequestForm />
        </>
      )
    }
  </div>
}
