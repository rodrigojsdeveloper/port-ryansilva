import React, { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '../Card';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const animationClass = useMemo(() => {
    if (inView) return 'animate-slideInFastRight'; // Entrada
    else return 'animate-slideOutFastRight'; // Saída
  }, [inView]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpeza ao desmontar
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Card
      title={'Siga as etapas'}
      subtitle={'Escolha o melhor dia e horário para você.'} 
      // color="bg-pink-primary"
      animationInSide="animate-slideInFastLeft"
      animationOutSide="animate-slideOutFastLeft"
      className='h-[100%] md:h-[46em]'
    >
      <div className='relative top-[-50px] max-md:mt-[4em]'>
        <div className="calendly-inline-widget" data-url="https://calendly.com/ryanbsdeveloper/call?hide_gdpr_banner=1&background_color=0c0c0c&text_color=f6f8fa&primary_color=f778ba" style={{ minWidth: '320px', height: '750px', margin: 0, padding: 0 }}></div>
        <p className='text-stone-500 text-sm text-center'>*Dependendo do assunto irei entrar em contato via whatsapp(caso tenha informado).</p>
      </div>
    </Card>
  );
};

export default Contact;
