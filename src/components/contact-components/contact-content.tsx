import { useEffect, useState } from 'react';
import useElementAppearance from '../hooks/useElementAppeareance';
import ContactForm from './contact-form';

const ContactContent = () => {

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    consent: false,
  });

  const isWidgetVisible = useElementAppearance('#launcher-frame');
  const isFormVisible = useElementAppearance('#widget-frame');
  const isFormWrapperVisible = useElementAppearance('#freshworks-frame-wrapper');

  useEffect(() => {
    window.FreshworksWidget('open');
    const launcherFrame = document.getElementById('launcher-frame');
    launcherFrame.style.visibility = 'hidden';
  }, [isWidgetVisible]);

  useEffect(() => {
    if (isFormVisible) {
      const widgetForm = document.getElementById('widget-frame');
      console.log("widgetForm", widgetForm);
      widgetForm.style.visibility = 'hidden';
    }
  }, [isFormVisible]);


  useEffect(() => {
    if (isFormWrapperVisible) {
      const formWrapper = document.getElementById('freshworks-frame-wrapper');
      console.log(formWrapper);
      formWrapper.style.visibility = 'hidden';
    }
  }, [isFormWrapperVisible]);

  useEffect(() => {
    const FreshworksWidget = window.FreshworksWidget;

    FreshworksWidget('prefill', 'ticketForm', {
      name: `name:${formData.name} | company:${formData.company}`,
      email: formData.email,
      subject: formData.message.split(' ').slice(0, 3).join(' '),
      description: formData.message
    });


    const widgetForm = document.getElementById('widget-frame');
    const button = widgetForm?.contentDocument.querySelector('#form-button');

    if (button) {
      setTimeout(() => {
        button.click();
        //refresh page
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }, 3000);
    }
  }, [formData]);


  return (
    <article className="grid lg:grid-cols-2 lg:p-0 p-8 content-center items-center lg:h-[90vh] gap-8">
      <div />
      <ContactForm onSubmit={(formData) => setFormData(formData)} />
    </article>
  );
};

export default ContactContent;
