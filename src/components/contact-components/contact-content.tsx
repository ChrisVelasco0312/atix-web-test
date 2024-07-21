import ContactForm from './contact-form';

const ContactContent = () => {

  return (
    <article className="grid lg:grid-cols-2 lg:p-0 p-8 content-center items-center lg:h-[90vh] gap-8">
      <div />
      <ContactForm onSubmit={(formData) => console.log(formData)} />
    </article>
  );
};

export default ContactContent;
