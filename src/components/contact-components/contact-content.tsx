import { useEffect, useState } from 'react';
import useElementAppearance from '../hooks/useElementAppeareance';
import ContactForm from './contact-form';

const ContactContent = () => {
  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);
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
    if ('FreshworksWidget' in window) {
      const FreshworksWidget = window.FreshworksWidget;
      if (typeof FreshworksWidget === 'function') {
        FreshworksWidget('open');
        const launcherFrame = document.getElementById('launcher-frame');

        if (launcherFrame) {
          launcherFrame.style.visibility = 'hidden';
        }
      }
    }
  }, [isWidgetVisible]);

  useEffect(() => {
    if (isFormVisible) {
      const widgetForm = document.getElementById('widget-frame');
      console.log("widgetForm", widgetForm);

      if (widgetForm) {
        widgetForm.style.visibility = 'hidden';
      }
    }
  }, [isFormVisible]);


  useEffect(() => {
    if (isFormWrapperVisible) {
      const formWrapper = document.getElementById('freshworks-frame-wrapper');
      console.log(formWrapper);
      if (formWrapper) {
        formWrapper.style.visibility = 'hidden';
      }
    }
  }, [isFormWrapperVisible]);

  useEffect(() => {
    const FreshworksWidget = window.FreshworksWidget;

    if (typeof FreshworksWidget === 'function') {
      FreshworksWidget('prefill', 'ticketForm', {
        name: `name:${formData.name} | company:${formData.company}`,
        email: formData.email,
        subject: formData.message.split(' ').slice(0, 3).join(' '),
        description: formData.message
      });


      const widgetForm = document.getElementById('widget-frame') as HTMLIFrameElement;
      const widgetContentDocument = widgetForm?.contentDocument;

      if (widgetContentDocument) {
        const button = widgetForm?.contentDocument.querySelector('#form-button') as HTMLButtonElement;

        if (button) {
          setTimeout(() => {
            button.click();
            //refresh page
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setSended(true);
            }, 3000);
          }, 3000);
        }
      }

    }
  }, [formData]);


  return (
    <article className="grid lg:grid-cols-2 lg:p-0 p-8 content-center items-center lg:h-[90vh] gap-8">
      <div />
      {!sended ? (
        <ContactForm onSubmit={(formData) => setFormData(formData)} loading={loading} />
      ) : (
        <p className="text-[#21272A]">Thanks for your message, we will get back to you soon.</p>
      )}
    </article>
  );
};

export default ContactContent;
