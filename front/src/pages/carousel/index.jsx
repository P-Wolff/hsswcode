import './index.scss';
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import imgslide1 from '../../assets/images/feedbacks/cassandra.svg';
import imgslide2 from '../../assets/images/feedbacks/Dylan.svg';
import imgslide3 from '../../assets/images/feedbacks/Slav.svg';
import imgslide4 from '../../assets/images/feedbacks/Gregory.svg';
import imgslide5 from '../../assets/images/feedbacks/Miranda.svg';

export default function Carousel() {
    const [active, setActive] = useState(0);
    const cards = [
        {
            imageUrl: imgslide1,
            title: "Cassandra Lima",
            content: "“A escolha da HSSW Code foi um encontro do que eu queria como pessoa e profissional. Adoraria que mais empresas tivessem o jeito HSSW Code de ser.”",
        },
        {
            imageUrl: imgslide2,
            title: "Dylan Monac",
            content: "A HSSW Code se destaca como uma empresa inovadora e comprometida com a excelência em desenvolvimento de software, ela inspira confiança e inovação no setor de tecnologia!",
        },
        {
            imageUrl: imgslide3,
            title: "Slav Thais",
            content: "“Na HSSW Code você é respeitado independente de gênero, raça, cor ou condição social. O que faz a HSSW Code ser diferente das outras é, principalmente, saber que tem pessoas remando todas nas mesma direção.”",
        },
        {
            imageUrl: imgslide4,
            title: "Greg Mato",
            content: "A HSSW Code é uma referência em tecnologia e inovação. O compromisso com a satisfação do cliente é evidente em cada interação. Com a HSSW Code, sua visão se torna realidade!",
        },
        {
            imageUrl: imgslide5,
            title: "Miranda Amorin",
            content: "“Uma empresa íntegra, transparente e que pensa no desenvolvimento de seus colaboradores, afinal, são pessoas que fazem a HSSW Code crescer e conquistar seu espaço no mercado.”",
        },
    ];

    const section4Ref = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.sectionId) {
            const scrollOptions = { behavior: "smooth", block: "start" };
            if (location.state.sectionId === 'section4') {
                section4Ref.current.scrollIntoView(scrollOptions);
            }
        }
    }, [location]);

    const handleNextCard = () => {
        setActive((prevActive) => (prevActive + 1) % cards.length);
    };

    return (
        <div className="carousel-feedbacks" ref={section4Ref}>
            <div className="tittle2">
                <h1>FeedBacks</h1>
            </div>

            <div className="carousel" onClick={handleNextCard}> 
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className={`card-container ${active === i ? 'active' : 'hidden'}`} 
                    >
                        {active === i && ( 
                            <Card title={card.title} content={card.content} imageUrl={card.imageUrl} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function Card({ title, content, imageUrl }) {
    return (
        <div className="card">
            <p className="content-carousel">{content}</p>
            <div className="card-content">
                <img src={imageUrl} alt={title} className="card-image" />
                <div className="text-content">
                    <h3 className="titulo-carousel">{title}</h3>
                </div>
            </div>
        </div>
    );
}
