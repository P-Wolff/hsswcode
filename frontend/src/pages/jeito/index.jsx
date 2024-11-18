import './index.scss';
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import digital from '../../assets/images/cards/digital.svg';
import experience from '../../assets/images/cards/experience.svg';
import finance from '../../assets/images/cards/finance.svg';
import strategy from '../../assets/images/cards/strategy.svg';
import supply from '../../assets/images/cards/supply.svg';
import technology from '../../assets/images/cards/technology.svg';

export default function JeitoNossoUnificado() {
    const [selectedCard, setSelectedCard] = useState(null);

    const dadosDosCards = [
        {
            titulo: 'Experience & Efficiency',
            imagem: experience,
            popupTitle: 'Experience & Efficiency',
            popupDescription: `Oferecemos um conjunto de práticas de criação de valor e customer experience para empresas que buscam alavancar a eficiência e melhorar a gestão de seus negócios, maximizando resultados e gerando perpetuidade.
            Essas práticas podem ser utilizadas de maneira ampla: da concepção da estratégia à sua implantação, da geração de valor para acionistas até o cliente final, a partir de projetos executados com um jeito único de fazer consultoria, o jeito HSSW Code.`,
            corDeFundo: '#F4E3B2'
        },
        {
            titulo: 'Strategy e M&A',
            imagem: strategy,
            popupTitle: 'Strategy e M&A',
            popupDescription: `Aumento da receita e rentabilidade da companhia, suportados por iniciativas estratégicas que aceleram o crescimento orgânico ou inorgânico.`,
            corDeFundo: '#A2CAF2'
        },
        {
            titulo: 'Finance',
            imagem: finance,
            popupTitle: 'Finance',
            popupDescription: `Temos como objetivo alavancar a geração de valor das empresas, auxiliando CFOs e times de Finanças na evolução de seu nível de maturidade para que possam agir de forma mais estratégica.
            Atuamos lado a lado com os times de finanças nessa jornada, desde o desdobramento de diretrizes estratégicas, passando pela revisão e implantação de políticas e metodologias, estruturação de processos, redefinição de sistemas, da estrutura e da governança da área.
            Com isso, conseguimos levar nossos clientes a otimizar a alocação e performance de seus recursos financeiros e garantir maior controle visibilidade de seus resultados.
            `,
            corDeFundo: '#E8B1D2'
        },
        {
            titulo: 'Supply Chain',
            imagem: supply,
            popupTitle: 'Supply Chain',
            popupDescription: `Atuamos em todo o Supply Chain de diferentes setores abrangendo todos os elos da cadeia de abastecimento desde fornecedores, compras, planejamento, produção, armazenagem, transporte/abastecimento e customer fulfillment.
            Desta forma, temos uma visão end to end da cadeia que nos permite otimizar fluxos de informação, materiais e financeiros, trazendo resultados concretos a nossos clientes. 
            A variedade de temas nos permite executar diversos tipos de desafios, desde estratégicos até táticos e operacionais, como a definição e implantação de soluções e sistemas.
            
            `,
            corDeFundo: '#B7E2D2'
        },
        {
            titulo: 'Technology',
            imagem: technology,
            popupTitle: 'Technology',
            popupDescription: `Enfrentar os desafios na área de tecnologia é uma tarefa complexa, especialmente quando existem problemas que podem estar afetando o desempenho e a eficiência da empresa. Os sistemas legados, infraestrutura obsoleta, problemas de integrações, dados inconsistentes e ataques cibernéticos são pontos de atenção que precisam ser endereçados.
            Nossa expertise em tecnologia, aliada ao conhecimento do negócio das empresas, nos permite atuar como advisors dos executivos de tecnologia, apoiando na identificação e solução dos problemas de forma assertiva e pragmática. Temos uma abordagem centrada no cliente, que se adapta as necessidades específicas do momento e busca a geração de valor para a empresa.
            `,
            corDeFundo: '#D9B5E8'
        },
        {
            titulo: 'Digital Transformation',
            imagem: digital,
            popupTitle: 'Digital Transformation',
            popupDescription: 'Traçamos o caminho para a transformação digital definindo estratégia, maximizando o valor dos dados e acelerando a transformação com IA e produtos digitais.',
            corDeFundo: '#F3F3F3'
        },
    ];

    const openPopup = (card, event) => {
        console.log("Abrindo popup para o card:", card);
        
        setSelectedCard(card);

    };

    const closePopup = () => {
        setSelectedCard(null);
    };
    

    const section2Ref = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.sectionId) {
            const scrollOptions = { behavior: "smooth", block: "start" };
            if (location.state.sectionId === 'section2') {
                section2Ref.current.scrollIntoView(scrollOptions);
            }
        }
    }, [location]);

    return (
        <div className="pagina-jeito" ref={section2Ref} >
            <h2>Nossas soluções são construidas lado a lado</h2>
            
            <div className="cards-container">
                {dadosDosCards.map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        
                    >
                        <img src={card.imagem} alt={card.titulo} className="card-image" />
                        <p className="card-title"
                            style={{
                                backgroundColor: card.corDeFundo
                            }}>
                            {card.titulo}
                        </p>
                        <p className="card-description">{card.descricao}</p>
                        <button
                            className="card-button"
                            onClick={(event) => openPopup(card, event)}
                            style={{ backgroundColor: card.corDeFundo }}
                        >
                            Conheça
                        </button>
                    </div>
                ))}
            </div>

            {selectedCard && (
                <Popup
                    title={selectedCard.popupTitle}
                    description={selectedCard.popupDescription}
                    imageUrl={selectedCard.imagem}
                    onClose={closePopup}
                    corDeFundo={selectedCard.corDeFundo}
                />
            )}
        </div>
    );
}

function Popup({ title, description, imageUrl, onClose, corDeFundo }) {
    
    return (
        <div className="popup-overlay">
            <div className="popup">
                <div className="popup-content">
                    <span className="close-button" onClick={onClose}>&times;</span>
                    <div className="popup-info">
                        <div className="popup-text">
                            <h2 style={{background: corDeFundo}} >{title}</h2>
                            <p>{description}</p>
                        </div>
                        <img src={imageUrl} alt={title} className="popup-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

