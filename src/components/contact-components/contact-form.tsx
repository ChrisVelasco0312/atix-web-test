import { useState } from 'react';
import Button from '../shared/button';
import { t } from "astro-i18n";

interface FormData {
  name: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
  consent: boolean;
}

interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    consent: false,
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const formDataIsValid = Object.values(formData).every(value => value !== '') && formData.consent;

  return (
    <div className="text-purple500">
      <h2 className="text-[40px] mb-6 font-integralCF">{t('contact.title')}</h2>
      <p className="mb-6 text-[#21272A]">
        {t('contact.description')}
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-2 gap-4">
          <div className='flex flex-col gap-2'>
            <label className='font-jakartaSansBold' htmlFor="name">{t('contact.labels.name')}</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="h-[48px] py-4 px-3 border-b border-solid border-[#C1C7CD] bg-gray100"
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-jakartaSansBold' htmlFor="company">
              {t('contact.labels.company')}
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="h-[48px] py-4 px-3 border-b border-solid border-[#C1C7CD] bg-gray100"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className='font-jakartaSansBold' htmlFor="email">
              {t('contact.labels.email')}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="h-[48px] py-4 px-3 border-b border-solid border-[#C1C7CD] bg-gray100"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className='font-jakartaSansBold text-nowrap' htmlFor="phoneNumber">
              {t('contact.labels.phone')}
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="h-[48px] py-4 px-3 border-b border-solid border-[#C1C7CD] bg-gray100"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className='font-jakartaSansBold' htmlFor="message">
            {t('contact.labels.message')}
          </label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="h-[48px] py-4 px-3 border-b border-solid border-[#C1C7CD] bg-gray100"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label htmlFor="consent" className="text-[#21272A]">
            {t('contact.authorize')}
          </label>
        </div>
        <div className="flex justify-end">
          <Button
            style={{
              width: '160px',
              opacity: formDataIsValid ? 1 : 0.5,
              cursor: formDataIsValid ? 'pointer' : 'not-allowed',
              pointerEvents: formDataIsValid ? 'auto' : 'none',
            }}
            text={t('contact.send')}
            type='submit'
            styleType="dark"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
