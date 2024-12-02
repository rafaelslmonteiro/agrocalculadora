import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaGraduationCap, FaBriefcase, FaBook, FaExternalLinkAlt } from 'react-icons/fa'

const contributors = [
  {
    name: 'Ana Carolina Cebin Pereira',
    image: '/Ana.png',
    education: 'Formada em Sistemas de Informação com pós-graduação em Gestão de Produtos',
    occupation: 'Product Manager na EASYB2B',
    research: 'Marketplaces B2B e B2C, metodologias ágeis, transformação digital',
    bio: 'Como Product Manager na EASYB2B, minha jornada envolve colaboração com equipes diversificadas onde emprego minha visão estratégica e experiência em metodologias ágeis para entregar soluções inovadoras e de alto valor. Possuo expertise em Marketplaces B2B e B2C, respaldada por formação em Sistemas de Informação e uma pós-graduação em Gestão de Produtos. Essa combinação me proporciona uma visão completa e criativa das oportunidades e desafios no mercado de produtos digitais. Meu propósito é impulsionar a transformação digital em diversos setores, usando a inovação e a tecnologia para gerar impacto positivo. Sou entusiasta do aprendizado contínuo, da colaboração e da troca de conhecimento, sempre em busca de novos desafios para meu crescimento profissional.',
    lattes: 'https://www.linkedin.com/in/ana-carolina-cebin-pereira-223883169/',
},
  {
    name: 'Izabela Dolores Cebin Bassani',
    image: '/Izabela.jpeg',
    education: 'Doutora em Geografia pela Universidade Federal do Espírito Santo (2020)',
    occupation: 'Professora efetiva na Secretaria de Estado da Educação do Espírito Santo',
    research: 'Geografia Urbana, reestruturação imobiliária, centro-periferia, condomínios industriais, loteamento urbano e renda da terra',
    bio: 'Possui graduação em Geografia pela Universidade Federal do Espírito Santo (2013), mestrado em Geografia pela mesma instituição (2016) e doutorado em Geografia pela Universidade Federal do Espírito Santo (2020). Atualmente é professor efetivo na Secretaria de Estado da Educação do Espírito Santo. Tem experiência na área de Geografia, com ênfase em Geografia Urbana, atuando principalmente nos seguintes temas: reestruturação imobiliária, centro-periferia, condomínios industriais, loteamento urbano e renda da terra.',
    lattes: 'http://lattes.cnpq.br/1234567890',
  },
  {
    name: 'Rafael Santos da Luz Monteiro',
    image: '/Rafa.jpg',
    education: 'Doutor em Geografia pela Universidade Federal do Espírito Santo',
    occupation: 'Professor efetivo da rede estadual de Ensino Médio no estado do Espírito Santo',
    research: 'Geografia Urbana, Produção Imobiliária, Renda da Terra e Financeirização do Capital',
    bio: 'Licenciado pleno em Geografia pela UFES em 2008. Professor do quadro efetivo da rede estadual de Ensino Médio no estado do Espírito Santo desde agosto de 2009. Mestre em Geografia pelo PPGG/UFES. Doutor em Geografia na área de Produção Imobiliária pelo PPGG/UFES. Áreas de interesse: Geografia Urbana, Produção Imobiliária, Renda da Terra e Financeirização do Capital.',
    lattes: 'http://lattes.cnpq.br/0987654321',
  },
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">Sobre o Projeto</h1>
      <div className="bg-brown-light bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-12 shadow-lg">
        <p className="text-lg text-center max-w-3xl mx-auto text-brown-dark">
          A Agrocalculadora é uma ferramenta web inovadora desenvolvida para auxiliar agricultores e entusiastas da jardinagem
          no planejamento eficiente do plantio de verduras. Nosso objetivo é otimizar o uso de recursos hídricos e
          fertilizantes, promovendo uma agricultura mais sustentável e produtiva. Através de cálculos precisos e
          recomendações personalizadas, buscamos contribuir para uma produção agrícola mais eficiente e ecologicamente responsável.
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Nossa Equipe</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {contributors.map((contributor) => (
          <Card key={contributor.name} className="overflow-hidden bg-white shadow-lg border-primary border">
            <CardHeader className="pb-0 bg-primary-light">
              <CardTitle className="text-2xl font-bold text-white">{contributor.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Image
                  src={contributor.image}
                  alt={contributor.name}
                  width={200}
                  height={200}
                  className="rounded-full object-cover shadow-lg border-4 border-primary self-center md:self-start"
                />
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2 border-b border-primary pb-2">
                    <FaGraduationCap className="text-primary flex-shrink-0" />
                    <p className="font-semibold text-brown-dark">{contributor.education}</p>
                  </div>
                  <div className="flex items-center gap-2 border-b border-primary pb-2">
                    <FaBriefcase className="text-primary flex-shrink-0" />
                    <p className="text-brown-dark">{contributor.occupation}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaBook className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-brown-dark"><span className="font-semibold">Áreas de pesquisa:</span> {contributor.research}</p>
                  </div>
                  <a
                    href={contributor.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary-light transition-colors mt-2"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Currículo Lattes</span>
                  </a>
                </div>
              </div>
              <div className="bg-brown-light bg-opacity-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-primary">Biografia</h3>
                <p className="text-sm leading-relaxed text-brown-dark">{contributor.bio}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

