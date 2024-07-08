import ContactForm from './contact-form';

const ContactContent = () => {

  return (
    <article className="grid grid-cols-2 content-center items-center h-[90%] gap-8">
      <div />
      <ContactForm onSubmit={(formData) => console.log(formData)} />
    </article>
  );
};

export default ContactContent;
